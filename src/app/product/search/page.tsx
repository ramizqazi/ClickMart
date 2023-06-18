'use client';

import { useSearchParams } from 'next/navigation';
import FlatList from 'flatlist-react/lib';
import ProductCard from '@/common/ProductCard';
import { useMediaQuery } from 'react-responsive';
import { useGetProductsBySearchText } from '../../../../sanity/lib/queries';

const Product = () => {
  const query = useSearchParams().getAll('query')[0];
  const isBigScreen = useMediaQuery({ query: '(max-width: 766px)' });
  const { data, refetch } = useGetProductsBySearchText(query);
  console.log(data);

  const _renderEmpty = () => <div></div>;

  return (
    <div className="bg-gray-200 h-full">
      <div className="p-2 pt-10 max-w-screen-xl m-auto">
        <FlatList
          list={data}
          displayGrid
          renderItem={renderItem}
          loadMoreItems={refetch}
          minColumnWidth={isBigScreen ? '170px' : '250px'}
          renderWhenEmpty={_renderEmpty}
        />
      </div>
    </div>
  );
};

const renderItem = (item: any) => <ProductCard key={item._id} product={item} />;

export default Product;
