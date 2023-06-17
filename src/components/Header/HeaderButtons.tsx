'use client';
import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'react-feather';

import CartDrawer from '../CartDrawer';
import WishlistDrawer from '../WishlistDrawer';
import { useGetCart, useGetWishlist } from '@/react-query/queries';

const HeaderUserDropdown = () => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [wishListDrawer, setWishListDrawer] = useState(false);
  const user_id = window.localStorage.getItem('user_id') || '';
  const { data: cartData, isLoading: cartLoading } = useGetCart(user_id);
  const { data: wishlistData, isLoading: wishlistLoading } =
    useGetWishlist(user_id);
  console.log(wishlistData);
  return (
    <div className="flex space-x-5">
      <div className="ml-4 flow-root lg:ml-6">
        <button
          onClick={() => setCartDrawer(true)}
          className="group -m-2 flex items-center p-2">
          <ShoppingCart
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-white group-hover:text-white">
            {cartData?.length}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </button>
      </div>
      <div className="ml-4 flow-root lg:ml-6">
        <button
          onClick={() => setWishListDrawer(true)}
          className="group -m-2 flex items-center p-2">
          <Heart
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-white group-hover:text-white">
            {wishlistData?.length}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </button>
      </div>
      <CartDrawer
        open={cartDrawer}
        setOpen={setCartDrawer}
        isLoading={cartLoading}
        data={cartData}
      />
      <WishlistDrawer
        open={wishListDrawer}
        data={wishlistData}
        isLoading={wishlistLoading}
        setOpen={setWishListDrawer}
      />
    </div>
  );
};

export default HeaderUserDropdown;
