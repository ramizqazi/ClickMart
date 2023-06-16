import { sql } from '@vercel/postgres';
import { pgTable, varchar, serial, integer } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const cartTable = pgTable('clickmartcart', {
  user_id: varchar("user_id", {
    length: 255
  }),
  product_id: serial("product_id"),
  size: varchar('size', { length: 255 }),
  color: varchar('color', { length: 255 }),
  price: integer('price')
});

export const db = drizzle(sql)
