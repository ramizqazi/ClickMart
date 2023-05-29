'use client';
import React, { useCallback, useState } from 'react';
import { useParams } from 'next/navigation';

import ProductDetails from '@/components/Products/ProductDetails';
import ProductsList from '@/components/Products/ProductsList';

const ProductScreen = () => {
  const { id } = useParams();

  const [qty, setQty] = useState(1);
  const [_variant, setVariant] = useState('');

  // useEffect(() => {
  //   if (id) {
  //     getProduct(id);
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [id]);

  const _handleQtyPlus = useCallback(
    () => setQty(prevState => prevState + 1),
    [],
  );
  const _handleQtyMinus = useCallback(() => {
    if (qty > 1) {
      setQty(prevState => prevState - 1);
    }
  }, [qty]);
  const _handleVariantChange = useCallback(
    (e: Event | any) => setVariant(e.target.value),
    [],
  );

  return (
    <div className="h-auto lg:h-full bg-gray-200">
      <div className="max-w-screen-xl py-5 mx-auto">
        <ProductDetails
          id={id}
          qty={qty}
          selectedVariant={_variant}
          onPlus={_handleQtyPlus}
          onMinus={_handleQtyMinus}
          onVariantChange={_handleVariantChange}
        />
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductScreen;
