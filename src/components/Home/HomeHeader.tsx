import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import React, { Fragment } from 'react';

interface Props {
  category: string;
  setCategory: Function;
}

const categories = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Men',
    value: 'men',
  },
  {
    title: 'Women',
    value: 'women',
  },
  {
    title: 'Kids',
    value: 'kids',
  },
  {
    title: 'Shoes',
    value: 'shoes',
  },
];

/* =============================================================================
<HomeHeader />
============================================================================= */
const HomeHeader = ({ setCategory }: Props) => {
  const _handleTabChange = (value: string) => {
    setCategory(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: 'transparent' }}
      animate={{ opacity: 1, backgroundColor: 'white' }}
      transition={{
        ease: 'easeInOut',
        duration: 0.9,
      }}
      className="sticky top-0 z-10 flex justify-between shadow-xl">
      <Tab.Group>
        <Tab.List className="flex-1 max-w-screen-xl mx-auto overflow-auto px-5 md:px-0">
          {categories?.map(category => (
            <Tab as={Fragment} key={category.value}>
              {({ selected }) => (
                <button
                  className={`text-gray-700 py-2 outline-none text-sm px-2 md:px-5 border-b-2 ${
                    selected
                      ? 'border-red-600 text-red-700'
                      : 'border-transparent'
                  }`}
                  onClick={() => _handleTabChange(category.value)}>
                  {category.title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </motion.div>
  );
};

const propsAreEqual = (prevProps: object | any, nextProps: object | any) =>
  prevProps.category === nextProps.category;

/* Export
============================================================================= */
export default React.memo(HomeHeader, propsAreEqual);
