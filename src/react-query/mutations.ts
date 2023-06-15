import { useMutation } from "react-query"
import { API_URL } from "../../config/secrets";

/**
 * Add to cart
 */
export const useAddToCart = () => useMutation((data: any) => fetch(`${API_URL}/cart`, {
  method: 'POST',
  body: JSON.stringify(data)
}));