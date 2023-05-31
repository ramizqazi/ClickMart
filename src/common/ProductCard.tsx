import React, { ComponentProps } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ProductActions from './ProductActions/index';
const product = {
  id: 1,
  name: 'Basic Tee',
  href: '#',
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  imageAlt: "Front of men's Basic Tee in black.",
  price: '$35',
  color: 'Black',
};
// More products...

const ProductCard = () => {
  return (
    <Link
      href={`/product/${1}`}
      className="group relative bg-white p-5 rounded-lg shadow-md">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-red-600 font-bold">Daraz</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-red-600">{product.price}</p>
          <p className="text-sm font-semibold text-gray-500 text-right line-through">
            $55
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
  prevProps?.product?.store?.name === nextProps?.product?.store?.name &&
  prevProps?.product?.store?.name === nextProps?.product?.store?.name &&
  prevProps.product?.photo?.toString() === nextProps.product?.photo?.toString();

export default React.memo(ProductCard, propsAreEqual);
