'use client';
import { useState } from 'react';
import FlatList from 'flatlist-react';
import { useMediaQuery } from 'react-responsive';

import ProductCard from '@/common/ProductCard';
import HomeHeader from '@/components/Home/HomeHeader';
import HomeDeals from '@/components/Home/HomeDeals/HomeDeals';

const Home = () => {
  const isBigScreen = useMediaQuery({ query: '(max-width: 766px)' });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const _handleLoadMoreItems = () => {
    // getProducts(category, nextCursor);
  };

  const _renderEmpty = () => <div></div>;

  return (
    <div className="w-full pb-5 bg-gray-200">
      <HomeHeader
        category={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <HomeDeals />
      <div className="p-2 max-w-screen-xl m-auto">
        <FlatList
          list={[
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
            {
              id: '1',
              photos: [
                'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp',
              ],
              name: 'T-shirt',
              price: 500,
              store: {
                name: 'Daraz.pk',
              },
            },
          ]}
          displayGrid
          renderItem={renderItem}
          loadMoreItems={_handleLoadMoreItems}
          minColumnWidth={isBigScreen ? '170px' : '250px'}
          renderWhenEmpty={_renderEmpty}
        />
      </div>
    </div>
  );
};
const renderItem = (item: any) => <ProductCard key={item.id} product={item} />;

export default Home;
