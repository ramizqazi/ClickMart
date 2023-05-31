'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import HeaderSearch from './HeaderSearch';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <motion.div
      initial={{ y: -180 }}
      animate={{ y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.9,
      }}
      className="px-5 py-2 bg-black border-b-2 border-red-600">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/">
          <h1 className="shrink-0 text-3xl font-bold text-white">
            ClickMart
            <span style={{ color: '#D2203A' }}>.</span>
          </h1>
        </Link>
        <HeaderSearch isLargeView />
        <HeaderButtons />
      </div>
    </motion.div>
  );
};

export default Header;
