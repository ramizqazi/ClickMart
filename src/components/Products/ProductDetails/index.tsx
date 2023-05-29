import React, { ComponentProps } from 'react';
import { Minus, Plus } from 'react-feather';

import ProductDetailsPhotos from './ProductDetailsPhotos';
import ProductDetailsInfo from './ProductDetailsInfo';
import ProductActions from '@/common/ProductActions';

const ProductDetails = ({
  id,
  qty,
  // product,
  onPlus,
  onMinus,
  selectedVariant,
  onVariantChange,
}: any) => {
  const product = {
    id: '1',
    about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ab deserunt, ut facere odit esse? Molestiae nihil adipisci autem obcaecati necessitatibus a dolor reprehenderit vel ipsa quidem voluptas, odit aspernatur?",
    photos: [
      'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
      'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
      'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
    ],
    name: 'T-shirt',
    price: 500,
    store: {
      name: 'Daraz.pk',
    },
  }
  const variants: any = [{name: 'xl', value: 'xl', title: 'Extra Large'}];
  const variantOptions = variants?.map((variant: any) => ({
    key: variant?.name,
    value: variant?.name,
    title: variant.title,
  }));
  
  return (
    <div className="flex flex-col lg:flex-row align-center lg:align-stretch px-5">
      <ProductDetailsPhotos photos={product?.photos} />
      <div className="ml-0 lg:ml-5">
        <ProductDetailsInfo
          product={product}
          selectedVariant={selectedVariant}
        />
        <div className='flex space-x-5 items-center'>
          <button className="text-black p-2" onClick={onPlus}>
            <Plus />
          </button>
          <p className='text-black'>{qty}</p>
          <button className="text-black p-2" onClick={onMinus}>
            <Minus />
          </button>
        </div>
        <div className="w-full flex-col lg:flex-row items-start justify-end">
          {variants && (
            <div className='flex space-x-2 w-full text-black'>
              <p>Sizes:</p>
              <select placeholder='Select Size' value={selectedVariant} onChange={onVariantChange}>
                {variantOptions.map((option: any) => (
                  <option key={option.value} value={option.value}>
                     {option.title}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className='pt-5 lg:pt-0'>
            <ProductActions showDetail id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line max-len
const propsAreEqual = (
  prevProps: ComponentProps<any>,
  nextProps: ComponentProps<any>,
) =>
  prevProps.id === nextProps.id &&
  prevProps.qty === nextProps.qty &&
  prevProps.selectedVariant === nextProps.selectedVariant &&
  prevProps.variants?.name === nextProps.variants?.name &&
  prevProps.variants?.price === nextProps.variants?.price;

export default React.memo(ProductDetails, propsAreEqual);
