import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from 'uuid';

import { cartTable, db } from '../../../../drizzel/index';
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  try {
    const req = request.nextUrl
    const user_id = req.searchParams.get('user_id') as string;
    console.log('api', user_id)
    if (!user_id) {
      return NextResponse.json({ message: 'user-id not found', status: 'bad' })
    }
    const payload = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id));

    return NextResponse.json({ message: 'query fetched successfully', status: 'ok', data: payload })
  } catch (e) {
    return NextResponse.json({ message: 'query fetching unsuccessfully', status: 'bad', error: e })
  }
}

export const POST = async (request: Request) => {
  try {
    const req = await request.json();
    const user_id = req.user_id || '';

    if (!user_id) {
      return NextResponse.json({ message: 'user-id not found', status: 'bad' })
    }

    const payload = await db.insert(cartTable).values({
      user_id: user_id,
      product_id: req.id,
      size: req.size,
      color: req.color,
      price: req.price,
    });

    return NextResponse.json({ message: 'product add successfully', status: 'ok', data: payload })
  } catch (e) {
    return NextResponse.json({ message: 'product add unsuccessfully', status: 'bad', error: e })
  }
}

export const DELETE = async (request: Request) => {
  try {
    const req = await request.json();
    const user_id = req.user_id || '';
    const product_id = req.product_id || '';

    if (!user_id || !product_id) {
      return NextResponse.json({ message: 'user-id or product-id not found', status: 'bad' });
    }

    const result = await db.delete(cartTable).where({
      user_id: user_id,
      product_id: product_id,
    });

    if (result) {
      return NextResponse.json({ message: 'product not found', status: 'bad' });
    }

    return NextResponse.json({ message: 'product deleted successfully', status: 'ok' });
  } catch (e) {
    return NextResponse.json({ message: 'product delete unsuccessful', status: 'bad', error: e });
  }
};
