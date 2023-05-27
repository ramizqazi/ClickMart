import React, { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  icon: ReactNode,
  title: string,
  count: number,
}

const HeaderButton = ({ icon, title, count }: Props) => {
  return (
    <Link href="/wish" className='relative flex-col items-center'>
      {icon}
      <h2 className='items-center text-black md:text-whtie'>{title}</h2>
      <div
        className='absolute right-1 w-4 h-4 items-center justify-center bg-red color-white text-xs text-bold rounded-full'
      >
        {count}
      </div>
    </Link>
  );
};

export default HeaderButton;
