import Link from 'next/link';
import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'react-feather';

import CartDrawer from '../CartDrawer';
import WishlistDrawer from '../WishlistDrawer';

const HeaderUserDropdown = ({ user }: any) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [wishListDrawer, setWishListDrawer] = useState(false);

  // if (!user) {
  //   return (
  //     <div className="space-x-2 flex ">
  //       <Link
  //         href="/auth/sign-in"
  //         className="hover:underline text-white font-bold py-2 px-4 rounded">
  //         sign in
  //       </Link>
  //       <Link
  //         href="/auth/sign-up"
  //         className="bg-red-600 flex hover:bg-red-700 text-white font-bold  justify-center items-center pl-2 pr-0 lg:py-2 lg:pl-4 lg:pr-3 rounded">
  //         sign up <ChevronRight />
  //       </Link>
  //     </div>
  //   );
  // }

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
            0
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
            0
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </button>
      </div>
      <CartDrawer open={cartDrawer} setOpen={setCartDrawer} />
      <WishlistDrawer open={wishListDrawer} setOpen={setWishListDrawer} />
    </div>
  );
};

export default HeaderUserDropdown;
