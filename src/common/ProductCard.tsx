import React, { ComponentProps } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ProductActions from './ProductActions/index';

const ProductCard = ({ product }: any) => {
  const photo = product?.photos[0];
  const name = product?.name;
  const price = product?.price;
  const store = product?.store?.name;

  return (
    <motion.div
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
      }}
      className="productCard bg-white shadow-lg rounded-md ">
      <Link href={`/product/${product?.id}`}>
        <img
          className="w-full h-auto 	rounded-md mb-2 "
          src={photo}
          alt={name}
        />
      </Link>
      <div className="text-center flex justify-between items-center py-2">
        <div>
          <h2 className="text-black text-sm text-red-600 text-left font-bold">
            {store}
          </h2>
          <h1 className="text-black text-left font-bold">{name}</h1>
        </div>
        <div>
          <p className="text-red-600 font-bold">{`Rs. ${price}`}</p>
          <p className="text-gray-500 text-xs text-right font-bold line-through">{`Rs. ${price}`}</p>
        </div>
      </div>
      <ProductActions id={product?.id} />
    </motion.div>
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
