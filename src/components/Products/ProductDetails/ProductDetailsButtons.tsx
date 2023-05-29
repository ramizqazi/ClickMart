import React, { ComponentProps } from 'react';
import { Heart, ShoppingCart } from 'react-feather';

const ProductDetailsButtons = ({
  id,
  user,
  // loading,
  addWishList,
  removeWishList,
}: any) => {
  const wishList = user?.wishList;
  const existInWishList = wishList?.find((w: string) => w === id);

  const _handleWishListClick = () => {
    if (existInWishList) {
      removeWishList(id);
    } else {
      addWishList(id);
    }
  };

  return (
    <div className="pt-5 lg:pt-0">
      <button
        className="text-black"
        // isLoading={loading}
        onClick={_handleWishListClick}>
        <Heart color="red" fill={existInWishList ? 'red' : 'none'} /> Add to
        Wish list
      </button>
      <button className="text-black">
        <ShoppingCart color="red" /> Add to Cart
      </button>
    </div>
  );
};

// eslint-disable-next-line max-len
const propsAreEqual = (
  prevProps: ComponentProps<any>,
  nextProps: ComponentProps<any>,
) =>
  prevProps.user === nextProps.user?.wishList?.toString() &&
  prevProps.loading === nextProps.loading;

export default React.memo(ProductDetailsButtons, propsAreEqual);
