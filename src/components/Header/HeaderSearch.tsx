import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const HeaderSearch = ({ isLargeView }: { isLargeView?: Boolean }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const _handleSearchClick = async (e: any) => {
    e.preventDefault();
    // if (value) {
    //   setLoading(true);
    //   await productFind(value, () => history.push(`/search?q=${value}`));
    //   setLoading(false);
    //   setValue('');
    // }
  };
  const _handleEnterPress = async (e: any) => {
    e.preventDefault();
    // if (e.keyCode === 13) {
    //   if (value) {
    //     setLoading(true);
    //     await productFind(value, () => history.push(`/search?q=${value}`));
    //     setLoading(false);
    //     setValue('');
    //   }
    // }
  };

  return (
    <form
      className={`${isLargeView && 'hidden md:block '} flex  h-8`}
      onKeyUp={_handleEnterPress}
      onSubmit={_handleSearchClick}>
      <input
        value={value}
        className="text-black h-full w-full md:w-80 rounded-l-full outline-none px-4 bg-red.100"
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="text-white text-xs px-2 md:text-lg  bg-red-600 rounded-r-full h-full outline-none w-20 "
        onClick={_handleSearchClick}>
        {loading ? <ClipLoader size={16} color="white" /> : 'Search'}
      </button>
    </form>
  );
};

export default HeaderSearch;