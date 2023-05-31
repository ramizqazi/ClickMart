import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HeaderSearch = ({ isLargeView }: { isLargeView?: Boolean }) => {
  const router = useRouter();
  const [value, setValue] = useState('');

  const _handleSearchClick = async (e: any) => {
    e.preventDefault();
    if (value) {
      router.push(`/product/search?query=${value}`);
    }
  };

  const _handleEnterPress = async (e: any) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (value) {
        router.push(`/product/search?query=${value}`);
      }
    }
  };

  return (
    <form
      className={`${
        isLargeView && 'hidden md:block '
      } flex h-8 overflow-hidden	`}
      onKeyUp={_handleEnterPress}
      onSubmit={_handleSearchClick}>
      <input
        value={value}
        className="text-black h-full rounded-l-full w-full md:w-96 outline-none px-4 bg-red.100"
        placeholder="Search products..."
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="text-white text-xs px-2 md:text-lg h-8 bg-red-600 rounded-r-full outline-none "
        onClick={_handleSearchClick}>
        Search
      </button>
    </form>
  );
};

export default HeaderSearch;
