'use client';
import { useState } from 'react';
import { Heart } from 'react-feather';
import { usePathname } from 'next/navigation';
import { RadioGroup } from '@headlessui/react';
import { v4 as uuid } from 'uuid';

import ProductImages from '@/components/Products/ProductImages';
import ProductSizes from '@/components/Products/ProductSizes';
import ProductLoading from '@/components/Products/ProductLoading';
import { useGetProudctById } from '../../../../sanity/lib/queries';
import {
  useAddToCart,
  useAddToWishlist,
  useDeleteFromWishlist,
} from '@/react-query/mutations';
import { useGetWishlist } from '@/react-query/queries';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}
const Product = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];
  const { mutate: addToCart } = useAddToCart();
  const user_id = window?.localStorage.getItem('user_id') || '';

  const { data: wishlist } = useGetWishlist(user_id);
  const { data: product, isLoading } = useGetProudctById(id);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[2]?.name);
  const [isProductInWishlist, setIsProductInWishlist] = useState(
    wishlist?.find((p: any) => p?.product_id === product?._id) ? true : false,
  );

  const { mutate: addToWishList } = useAddToWishlist(
    (reqStatus: string) => reqStatus === 'bad' && setIsProductInWishlist(false),
  );
  const { mutate: deleteFromWishList } = useDeleteFromWishlist();

  if (isLoading && !product) {
    return (
      <div className="bg-white">
        <ProductLoading />
      </div>
    );
  }

  const _handleAddToCart = (e: Event | any) => {
    e.preventDefault();
    const disabled = !selectedColor || !selectedSize;

    if (!disabled) {
      if (user_id) {
        addToCart({
          id: product?._id,
          user_id: user_id,
          color: selectedColor,
          size: selectedSize,
          price: product?.price,
        });
      } else {
        const uid = uuid();
        window.localStorage.setItem('user_id', uid);

        addToCart({
          id: product?._id,
          user_id: uid,
          color: selectedColor,
          size: selectedSize,
          price: product?.price,
        });
      }
    } else {
      alert('please mark all options');
    }
  };

  const _handleWishListClick = () => {
    if (!isProductInWishlist) {
      setIsProductInWishlist(true);
      addToWishList({
        user_id,
        product_id: product?._id,
      });
    } else {
      setIsProductInWishlist(false);
      deleteFromWishList({
        user_id,
        product_id: product?._id,
      });
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        {product?.images && <ProductImages photos={product?.images} />}

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product?.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900 font-bold">
              {`${product?.price}$`}
            </p>
            <p className="text-xl line-through tracking-tight text-gray-400">
              {`${product?.previousPrice}$`}
            </p>

            <form className="mt-10" onSubmit={_handleAddToCart}>
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4">
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product?.colors.map((color: any) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color?.name}
                        className={({ active, checked }) =>
                          classNames(
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            color?.class,
                            'relative -m-0.5 flex ring-red-400 cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                          )
                        }>
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                            `${color.class}`,
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <ProductSizes
                sizes={product?.sizes}
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
              />

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Add to bag
              </button>
            </form>
            <button
              onClick={_handleWishListClick}
              className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-3 text-base font-medium text-white  outline-none ring-2 ring-red-500 ring-offset-2">
              <Heart
                fill={isProductInWishlist ? 'red' : 'transparent'}
                size={22}
                color="red"
              />
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {product?.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product?.highlights?.map((highlight: any) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product?.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
