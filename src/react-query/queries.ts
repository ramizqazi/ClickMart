/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';

/**
 * Get Cart
 */
export const userGetCart = (user_id: string) =>
  useQuery(
    ['cart'],
    async () => {
      const payload = await fetch(`http://localhost:3000/api/cart?`+ new URLSearchParams({user_id: user_id}), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const jsonData = await payload.json();

      return jsonData?.data;
    },
  );
