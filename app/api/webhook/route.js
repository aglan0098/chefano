import Stripe from 'stripe';
import { updateDatabaseOnPaymentSuccess } from '@/app/_utils/dbUpdates';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export const config = {
    api: {
        bodyParser: false, // We need the raw body for Stripe signature verification
    },
};

export async function POST(req) {
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
        return new Response(JSON.stringify({ error: 'No Stripe signature found' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        // Capture the raw request body
        const rawBody = await req.text();

        // Verify and construct the event
        const event = stripe.webhooks.constructEvent(
            rawBody,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );

        // Handle the event
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const { courseId, userId } = session.metadata;

            await updateDatabaseOnPaymentSuccess(courseId, userId);
        }

        return new Response(JSON.stringify({ received: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.error('Webhook error:', err.message);
        return new Response(JSON.stringify({ error: 'Webhook error' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
