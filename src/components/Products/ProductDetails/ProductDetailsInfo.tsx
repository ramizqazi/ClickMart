import React, { ComponentProps } from 'react';

const ProductDetailsInfo = ({ selectedVariant, product }: any) => {
  const store = product?.store?.name;
  const name = product?.name;
  const about = product?.about;
  const variants = product?.variants;
  const price = selectedVariant
    ? variants.find((v: Event | any) => v?.name === selectedVariant)?.price
    : product?.price;

  return (
    <div className='space-y-3'>
      <h1 className="font-bold text-red-500 text-4xl">{store}</h1>
      <h1 className="text-black font-bold text-2xl">{name}</h1>
      <p className="font-bold text-gray-700">{about}</p>
      <div>
        <p className="text-red-600 font-bold text-xl">{`Rs. ${price}`}</p>
        <p className="text-gray-500 text-lg font-bold line-through">{`Rs. ${799}`}</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line max-len
const propsAreEqual = (
  prevProps: ComponentProps<any>,
  nextProps: ComponentProps<any>,
) =>
  prevProps.selectedVariant === nextProps.selectedVariant &&
  prevProps.product?.store.name === nextProps.product?.store.name &&
  prevProps.product?.name === nextProps.product?.name &&
  prevProps.product?.about === nextProps.product?.about &&
  prevProps.product?.price === nextProps.product?.price &&
  prevProps.product?.variants?.name === nextProps.product?.variants?.name &&
  prevProps.product?.variants?.price === nextProps.product?.variants?.price;

export default React.memo(ProductDetailsInfo, propsAreEqual);
