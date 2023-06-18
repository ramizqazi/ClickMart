import { useMutation } from "react-query"
import { client } from "../../config/react-query";
import { L } from "drizzle-orm/db.d-a6fe1b19";

/**
 * Add to cart
 */
export const useAddToCart = () => useMutation((data: any) => {
  return fetch(`https://click-mart.vercel.app/api/cart`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}, {
  onSuccess: (p) => {
    client.invalidateQueries(['cart'])
  }
});

/**
 * Add to wishlist
 */
export const useAddToWishlist = (cb: Function) => useMutation((data: any) => {
  return fetch(`https://click-mart.vercel.app/api/wishlist`, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then((res) => {
    if (res) {
      if (typeof cb === 'function') {
        cb(res?.status)
      }
    }
  })
}, {
  onSuccess: (p) => {
    client.invalidateQueries(['wishlist'])
  }
});

/**
 * Delete from cart
 */
export const useDeleteFromCart = () => useMutation((data: any) => {
  return fetch(`https://click-mart.vercel.app/api/cart?` + new URLSearchParams(data), {
    method: 'DELETE',
  })
}, {
  onSuccess: () => {
    client.invalidateQueries(['cart'])
  }
});

/**
 * Delete from cart
 */
export const useDeleteFromWishlist = () => useMutation((data: any) => {
  return fetch(`https://click-mart.vercel.app/api/wishlist?` + new URLSearchParams(data), {
    method: 'DELETE',
    body: JSON.stringify(data)
  })
}, {
  onSuccess: (p) => {
    client.invalidateQueries(['wishlist'])
  }
});