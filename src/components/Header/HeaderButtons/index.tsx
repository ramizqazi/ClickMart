import React from 'react';
import {
  Heart,
  LogOut,
  ShoppingCart,
} from 'react-feather';
import Link from 'next/link';

import HeaderButton from './HeaderButton';
import HeaderButtonMenu from './HeaderButtonMenu';

const HeaderButtons = ({ user }: any) => {
  const wishList = [];

  const _handleLogout = async () => {
  };

  if (!user) {
    return (
      <div>
        <div className='hidden md:flex space-x-3.5'>
          <Link href="/auth/login"  className='text-white hover:underline '>Sign In</Link>
          <Link href="/auth/register" className='text-white hover:underline '>Sign Up</Link>
        </div>
         <HeaderButtonMenu />
      </div>
    );
  }

  return (
    <div>
      <div  className='hidden lg:flex space-x-3.5'>
        <HeaderButton title="Wish List" icon={<Heart color="white" />} count={wishList.length} />
        <HeaderButton title="Your Cart" icon={<ShoppingCart color="white" />} count={2} />
        <button onClick={_handleLogout}>Logout <LogOut /> </button>
      </div>
      <HeaderButtonMenu />
    </div>
  );
};


export default HeaderButtons;
