import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")('sk_test_51NKJhbHh12d4oAxiM17Oeziszvn8KNIUHDH8RYv3ggZSQJDluShLv436FGGvCmwyRVG36d6AgwcEejaPtUwHkhia00lCQFm507');

export const GET = async (request: NextRequest) => {
  try {
    const req = request.nextUrl
    const amount = req.searchParams.get('amount') || 0;

    if (!amount) {
      return NextResponse.json({ message: 'amount not found', status: 'bad' })
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ message: 'query fetched successfully', status: 'ok', data: paymentIntent.client_secret })
  } catch (e) {
    return NextResponse.json({ message: 'query fetching unsuccessfully', status: 'bad', error: e })
  }
}
