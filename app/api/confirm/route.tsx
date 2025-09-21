import {NextResponse, type NextRequest } from "next/server"
import Stripe from "stripe";
import  db  from "@/utils/db";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const GET = async (req: NextRequest) => {

    const {searchParams} = new URL(req.url)
    const sessionId = searchParams.get('session_id') as string;

    if (!sessionId) {
        return new Response(JSON.stringify({ error: 'Missing session_id' }), { status: 400 });
      }

   try {
       const session = await stripe.checkout.sessions.retrieve(sessionId);
       const bookingId = session.metadata?.bookingId;

       if(session.status !== 'complete' || !bookingId){
        throw new Error('Payment not completed or bookingId missing');
       }

       await db.booking.update({
        where:{id:bookingId},
        data:{paymentStatus:true}
       });
   } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error retrieving session' }, { status: 500 });
   }
   redirect('/bookings')

    

}