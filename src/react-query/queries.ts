/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';

import { API_URL } from '../../config/secrets';

/**
 * Get Cart
 */
export const userGetCart = () =>
  useQuery(
    ['cart'],
    async () => {
      const payload = await fetch(`${API_URL}/api/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const jsonData = await payload.json();
      console.log(jsonData)

      return jsonData?.data;
    },
  );
