import { sql } from '@vercel/postgres';
import { pgTable, varchar, integer, serial } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const cartTable = pgTable('Cart', {
  user_id: varchar("user_id", {
    length: 255
  }),
  product_id: varchar("product_id", {
    length: 255
  }),
  size: varchar('size', { length: 255 }),
  color: varchar('color', { length: 255 })
});

export const db = drizzle(sql)
