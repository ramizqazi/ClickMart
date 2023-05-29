import React, { ComponentProps, useState } from 'react';
import { Heart, ShoppingCart } from 'react-feather';

// import ProductActionsLoginModal from './ProductActionsLoginModal';

const ProductActions = ({
  id,
  user,
  showDetail,
}: // addWishList,
// removeWishList,
// addToCart,
// removeFromCart,
any) => {
  const wishList = user?.wishList;
  const cart = user?.cart;
  const existInWishList = !!wishList?.find((w: any) => w === id);
  const existInCart = !!cart?.find(
    (c: any) => c?.product?._id === id || c?.product === id,
  );

  const [wishListLoading, setWishListLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  const _handleWishListClick = async () => {
    setWishListLoading(true);
    if (!user) {
      // onOpen();
    } else if (existInWishList) {
      // await removeWishList(id);
    } else {
      // await addWishList(id);
    }
    setWishListLoading(false);
  };

  const _handleCartClick = async () => {
    setCartLoading(true);
    if (!user) {
      // onOpen();
    } else if (existInCart) {
      // await removeFromCart(id);
    } else {
      // await addToCart(id);
    }
    setCartLoading(false);
  };

  return (
    <div className="pt-5 flex md:pt-0">
      <button className="text-black p-2 flex items-center" onClick={_handleWishListClick}>
        <Heart color="red" fill={existInWishList ? 'red' : 'none'} />
        {showDetail && <p className="ml-2 text-red-600">Add to Wish list</p>}
      </button>
      <button className="text-black p-2 flex items-center" onClick={_handleCartClick}>
        <ShoppingCart color="red" fill={existInCart ? 'red' : 'none'} />
        {showDetail && <p className="ml-2 text-red-600">Add to Cart</p>}
      </button>
      {/* <ProductActionsLoginModal isVisible={isOpen} onClose={onClose} /> */}
    </div>
  );
};

// eslint-disable-next-line max-len
const propsAreEqual = (
  prevProps: ComponentProps<any>,
  nextProps: ComponentProps<any>,
) =>
  prevProps.id === nextProps.id &&
  prevProps.user?.cart?.length === nextProps.user?.cart?.length &&
  prevProps.user?.cart?.product?._id === nextProps.user?.cart?.product?._id &&
  prevProps.user?.wishList?.toString() === nextProps.user?.wishList?.toString();

export default React.memo(ProductActions, propsAreEqual);
