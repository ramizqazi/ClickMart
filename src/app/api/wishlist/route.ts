import { NextRequest, NextResponse } from "next/server";

import { wishlistTable, db } from '../../../../drizzel/index';
import { and, eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  try {
    const req = request.nextUrl
    const user_id = req.searchParams.get('user_id') as string;

    if (!user_id) {
      return NextResponse.json({ message: 'user-id not found', status: 'bad' })
    }
    const payload = await db.select().from(wishlistTable).where(eq(wishlistTable.user_id, user_id));

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

    const payload = await db.insert(wishlistTable).values({
      user_id: user_id,
      product_id: req.product_id,
    });

    return NextResponse.json({ message: 'product add successfully', status: 'ok', data: payload })
  } catch (e) {
    return NextResponse.json({ message: 'product add unsuccessfully', status: 'bad', error: e })
  }
}

export const DELETE = async (request: NextRequest) => {
  try {
    const req = request.nextUrl
    const user_id = req.searchParams.get('user_id') as string;
    const product_id = req.searchParams.get('product_id') as string;

    if (!user_id || !product_id) {
      return NextResponse.json({ message: 'user-id or product-id not found', status: 'bad' });
    }

    const result = await db.delete(wishlistTable).where(
      and(
        eq(wishlistTable.user_id, user_id),
        eq(wishlistTable.product_id, product_id)
      )
    );

    if (!result) {
      return NextResponse.json({ message: 'product not found', status: 'bad' });
    }

    return NextResponse.json({ message: 'product deleted successfully', status: 'ok' });
  } catch (e) {
    return NextResponse.json({ message: 'product delete unsuccessful', status: 'bad', error: e });
  }
};
