import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
    try {
        const event = await req.json();

        if (event.type === 'user.created') {
            const { id, email_addresses } = event.data;

            // Create a user in Strapi
            await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}api/users-data`, {
                data: {
                    clerkId: id,
                    email: email_addresses[0].email_address,
                },
            });
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Error handling webhook event:', error);
        return NextResponse.json({ error: 'Error handling webhook event' }, { status: 500 });
    }
}
