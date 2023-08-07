import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useGetProudctById } from '../../../sanity/lib/queries';
import { urlForImage } from '../../../sanity/lib/image';
import { useDeleteFromWishlist } from '@/react-query/mutations';

export default function WishlistDrawerItem({ wishlistItem }: any) {
  let user_id: string | null = null;

  if(typeof window !== 'undefined') {
    user_id = window?.localStorage.getItem('user_id') ;
  }
  const { mutate: deleteFromWishlist } = useDeleteFromWishlist();
  const { data: product } = useGetProudctById(wishlistItem?.product_id);

  const _handleRemoveFromCart = () => {
    deleteFromWishlist({
      user_id,
      product_id: wishlistItem?.product_id,
    });
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        {product?.thumbnail && (
          <Image
            width="200"
            height="200"
            alt={product?.imageAlt}
            src={urlForImage(product?.thumbnail)?.url()}
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>

      <div className="ml-4 flex flex-1 justify-between flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product?.name}</h3>
            <p className="ml-4">{`$${product?.price}`}</p>
          </div>
        </div>
        <div className="flex items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <p className="text-gray-500">{`category: ${
              product?.category?.slice(0, 1).toUpperCase() +
              product?.category?.slice(1)
            }`}</p>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={_handleRemoveFromCart}
              className="font-medium text-red-600 hover:text-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
