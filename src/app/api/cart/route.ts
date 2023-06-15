import { NextResponse } from "next/server";
import { v4 as uuid } from 'uuid';

import { cartTable, db } from '../../../../drizzel/index';
import { eq } from "drizzle-orm";



export const GET = async () => {
  try {
    const user_id = localStorage.getItem("user_id") || '';
    const payload = await db.select().from(cartTable).where(eq(cartTable.user_id, user_id));

    return NextResponse.json({ message: 'query fetched successfully', status: 'ok', data: payload })
  } catch (e) {
    return NextResponse.json({ message: 'query fetching unsuccessfully', status: 'bad', error: e })
  }
}

export const POST = async (request: Request) => {
  try {
    const req = await request.json();
    const uid = uuid();
    const user_id = localStorage.getItem("user_id");

    if (!user_id) {
      localStorage.setItem('user_id', uid);
    }

    await db.insert(cartTable).values({
      product_id: req.id,
      size: req.size,
      color: req.color,
      user_id: user_id || '',
    });

    return NextResponse.json({ message: 'product add successfully', status: 'ok' })
  } catch (e) {
    return NextResponse.json({ message: 'product add unsuccessfully', status: 'bad', error: e })
  }
}