import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
    const { courseId, courseTitle, coursePrice, userId } = await req.json();

    try {
        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "sar", // Saudi Riyal
                        product_data: {
                            name: courseTitle,
                        },
                        unit_amount: coursePrice * 100, // Convert to smallest currency unit
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${courseId}/content`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${courseId}/details`,
            metadata: {
                courseId: courseId.toString(),
                userId: userId.toString(),
            },
        });

        return NextResponse.json({ checkoutUrl: session.url });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
    }
}
