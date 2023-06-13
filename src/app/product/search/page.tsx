'use client';

// import { useParams } from 'next/navigation';
// import FlatList from 'flatlist-react/lib';
// import ProductCard from '@/common/ProductCard';
// import { useMediaQuery } from 'react-responsive';

const Product = () => {
  // const pathname = useParams();
  // const isBigScreen = useMediaQuery({ query: '(max-width: 766px)' });

  // const _handleLoadMoreItems = () => {
  //   // getProducts(category, nextCursor);
  // };

  // const _renderEmpty = () => <div></div>;
  return (
    <div className="bg-white">
      <div className="p-2 max-w-screen-xl m-auto">
        {/* <FlatList
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
        /> */}
      </div>
    </div>
  );
};

// const renderItem = (item: any) => <ProductCard key={item._id} product={item} />;

export default Product;
