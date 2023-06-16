import Image from 'next/image';
import { useState } from 'react';

import { useGetProudctById } from '../../../sanity/lib/queries';
import { urlForImage } from '../../../sanity/lib/image';
import { Minus, Plus } from 'react-feather';

export default function CartDrawerItem({ cartItem, onCartItemChange }: any) {
  const { data: product } = useGetProudctById(cartItem?.product_id);
  const [qty, setQty] = useState(0);

  const _handleAdd = () => {
    setQty(prev => prev + 1);
    onCartItemChange((prev: any) => {
      const filterdItems = prev?.filter((i: any) => i?.product_id !== cartItem?.product_id)

      console.log(filterdItems)

      return [...filterdItems, {...cartItem, price: cartItem?.price + cartItem?.price}]
    })
  };
  
  const _handleDelete = () => {};

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
        <div>
          <div className="flex space-x-2 items-center">
            <button onClick={_handleAdd} className="bg-red-500 w-5 h-5 flex justify-center items-center rounded-full hover:bg-red-400">
              <Plus size={16} color="white" />
            </button>
            <p className="text-black">{qty}</p>
            <button className="bg-red-500 w-5 h-5 flex justify-center items-center rounded-full hover:bg-red-400">
              <Minus size={16} color="white" />
            </button>
          </div>
        </div>
        <div className="flex items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <p className="text-gray-500">{`Size: ${cartItem?.size}`}</p>
            <p className="text-sm text-gray-500">{`Color: ${cartItem?.color}`}</p>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
