import { useMutation } from "react-query"
import { client } from "../../config/react-query";

/**
 * Add to cart
 */
export const useAddToCart = () => useMutation((data: any) => {
  return fetch(`http://localhost:3000/api/cart`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}, {
  onSuccess: (p) => {
    client.invalidateQueries(['cart'])
  }
});