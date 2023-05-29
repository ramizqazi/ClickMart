import React from 'react';

import ProductCard from '@/common/ProductCard';

const ProductsList = () => {
  const products: any = [];
  return (
    <div className="flex space-x-5 space-y-5 w-full overflow-auto">
      {products?.map((product: any) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
