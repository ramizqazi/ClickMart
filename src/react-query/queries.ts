import { useQuery } from 'react-query';

/**
 * Get Cart
 */
export const useGetCart = (user_id: string | any) =>
  useQuery(
    ['cart'],
    async () => {
      console.log(`https://click-mart-git-main-ramizqazi.vercel.app/api/cart?` + new URLSearchParams({ user_id: user_id }))
      const payload = await fetch(`https://click-mart-git-main-ramizqazi.vercel.app/api/cart?` + new URLSearchParams({ user_id: user_id }), {
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
export const useGetWishlist = (user_id: string | any) =>
  useQuery(
    ['wishlist'],
    async () => {
      const payload = await fetch(`https://click-mart-git-main-ramizqazi.vercel.app/api/wishlist?` + new URLSearchParams({ user_id: user_id }), {
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
      const payload = await fetch(`https://click-mart-git-main-ramizqazi.vercel.app/api/checkout?` + new URLSearchParams({ amount: amount }), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const jsonData = await payload.json();

      return jsonData?.data;
    },
  );
