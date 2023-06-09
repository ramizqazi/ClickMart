/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from 'react-query';

/**
 * Get Cart
 */
export const useGetCart = (user_id: string) =>
  useQuery(
    ['cart'],
    async () => {
      console.log(`http://localhost:3000/api/cart?` + new URLSearchParams({ user_id: user_id }))
      const payload = await fetch(`http://localhost:3000/api/cart?` + new URLSearchParams({ user_id: user_id }), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const jsonData = await payload.json();

      return jsonData?.data;
    },
    {
      retry: true,
    }
  );

/**
 * Get Wishlist
 */
export const useGetWishlist = (user_id: string) =>
  useQuery(
    ['wishlist'],
    async () => {
      const payload = await fetch(`http://localhost:3000/api/wishlist?` + new URLSearchParams({ user_id: user_id }), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const jsonData = await payload.json();

      return jsonData?.data;
    },
    {
      retry: true,
      retryDelay: 100,
    }
  );

/**
 * Get Checkout ID
 */
export const useGetCheckoutId = (amount: string) =>
  useQuery(
    ['checkoutId'],
    async () => {
      const payload = await fetch(`http://localhost:3000/api/checkout?` + new URLSearchParams({ amount: amount }), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const jsonData = await payload.json();

      return jsonData?.data;
    },
  );
