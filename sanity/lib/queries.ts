/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';
import { client } from './client';

/**
 * Get Products
 */
export const useGetProudcts = (category: string) =>
  useQuery(
    ['products', category],
    async () => {
      if (category === 'all') {
        const payload = await client.fetch(`*[_type=="product"]{
          _id,
          name,
          price,
          thumbnail,
          previousPrice,
        }`)

        return payload;
      } else {
        const payload = await client.fetch(`*[_type=="product" && category=="${category}"]{
          _id,
          name,
          price,
          category,
          thumbnail,
          previousPrice,
        }`)
        console.log(1, payload)

        return payload;
      }
    },
  );

/**
 * Get Product by id
 */
export const useGetProudctById = (id: string) =>
  useQuery(
    ['products', id],
    async () => {
      const payload = await client.fetch(`*[_type=="product" && _id=="${id}"][0]`)

      return payload;
    },
  );

