import React, { ComponentProps } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {urlForImage} from '../../sanity/lib/image'

interface ProductType {
  _id: string,
  thumbnail: any,
  name: string,
  price: number,
  previousPrice: number,
}

const ProductCard = ({product}: {product: ProductType}) => {
  console.log(product)
  return (
    <Link
      href={`/product/${product._id}`}
      className="group relative bg-white p-2 rounded-lg shadow-md ">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={urlForImage(product.thumbnail).url()}
          width="200"
          height="200"
          alt='thumbnail of product'
          className="h-full w-full object-cover object-center z-0 lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 p-3 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            {/* <a href={product?}> */}
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            {/* </a> */}
          </h3>
          <p className="mt-1 text-sm text-red-600 font-bold">Daraz</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-red-600">{`${product.price}$`}</p>
          <p className="text-sm font-semibold text-gray-500 text-right line-through">
          {`${product.previousPrice}$`}
          </p>
        </div>
      </div>
    </Link>
  );
};

// eslint-disable-next-line max-len
const propsAreEqual = (
  prevProps: ComponentProps<any>,
  nextProps: ComponentProps<any>,
) =>
  prevProps?.id === nextProps?.id &&
  prevProps?.product?.name === nextProps?.product?.name &&
  prevProps?.product?.price === nextProps?.product?.price &&
  prevProps?.product?.previousPrice === nextProps?.product?.previousPrice &&
  prevProps?.product?.thumbnail === nextProps?.product?.thumbnail;

export default React.memo(ProductCard, propsAreEqual);
