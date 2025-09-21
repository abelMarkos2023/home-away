import { type NextResponse, type NextRequest } from "next/server";

import  db  from "@/utils/db";

import Stripe from "stripe";
import { formatDate } from "@/utils/format";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const POST = async (req: NextRequest) => {

const reqHeaders = new Headers(req.headers);
const origin = reqHeaders.get('origin') 

const { bookingId} = await req.json();

if (!bookingId) {
    return Response.json({ error: 'Missing bookingId' }, { status: 400 });
  }

  
    const booking = await db.booking.findUnique({
        where :{id:bookingId},
        include:{
            property:
            {
            select:{name:true,image:true}
             }
    }
    });
    if (!booking) {
        return Response.json({ error: 'Booking not found' }, { status: 404 , statusText:"Booking not found"});
      }

      const {checkOut,checkIn,totalNights,orderTotal,property:{name,image}} = booking

      try {
        const session = await stripe.checkout.sessions.create({
            ui_mode:"embedded",
            metadata:{bookingId:booking.id},
            line_items:[
                {
                    quantity:1,
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name:`Booking for ${name}`,
                            images: image ? [image] : [],
                            description:`Stay at ${name} from ${formatDate(checkIn)} to ${formatDate(checkOut)} for ${totalNights} ${totalNights > 1 ? 'nights' : 'night'}`
                        },
                        unit_amount: Math.round(orderTotal * 100),
                    },
                    
                }
            ],
            mode:"payment",
           return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
        })
        return Response.json({ clientSecret: session.client_secret });
      } catch (error) {
        console.log(error)
        return Response.json({ error: 'Error creating checkout session' }, { status: 500 });
      }
}