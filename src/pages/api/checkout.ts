import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest,res:NextApiResponse){
  const priceId = 'price_1LorH4JN6eOPeR1Wr33INtIy';

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: successUrl,
    success_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
    
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}