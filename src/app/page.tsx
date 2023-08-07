'use client';
import { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import { useMediaQuery } from 'react-responsive';

import ProductCard from '@/common/ProductCard';
import HomeHeader from '@/components/Home/HomeHeader';
import HomeDeals from '@/components/Home/HomeDeals/HomeDeals';
import HomeHeroSection from '@/components/Home/HomeHeroSection';
import HomeListEmpty from '@/components/Home/HomeListEmpty';

import { useGetProudcts } from '../../sanity/lib/queries';
import Header from '@/components/Header';

const Home = () => {
  const isBigScreen = useMediaQuery({ query: '(max-width: 766px)' });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const {
    data: products,
    refetch,
    isLoading,
    isError,
  } = useGetProudcts(selectedCategory);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const _renderEmpty = () => {
    return (
      <>
        {isLoading && <HomeListEmpty />}
        {isError && (
          <div className="h-52 justify-center items-center flex">
            <p className="text-center text-gray-400">
              Coudnt fetch prodcuts something went wrong
            </p>
          </div>
        )}
        {!isLoading && !isError && products?.length === 0 && (
          <div className="h-52 justify-center items-center flex">
            <p className="text-center text-gray-400">
              No product availble for this category
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="w-full pb-5 bg-gray-200">
      <Header />
      <HomeHeader
        category={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <HomeDeals />
      <div className="p-2 max-w-screen-xl m-auto">
        <FlatList
          list={products}
          displayGrid
          renderItem={renderItem}
          loadMoreItems={refetch}
          minColumnWidth={isBigScreen ? '170px' : '250px'}
          renderWhenEmpty={_renderEmpty}
        />
      </div>
      <HomeHeroSection />
    </div>
  );
};

const renderItem = (item: any) => <ProductCard key={item._id} product={item} />;

export default Home;
