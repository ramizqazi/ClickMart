'use client';

import { RadioGroup } from '@headlessui/react';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

const ProductLoading = () => {
  return (
    <div className="pt-6">
      <div className="mx-auto animate-pulse mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <div className="h-full w-full  bg-gray-200 object-cover object-center" />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <div className="h-96 w-full bg-gray-200 object-cover object-center" />
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <div className="h-96 w-full bg-gray-200 object-cover object-center" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl h-full px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        </div>

        

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>

            <div className="space-y-6">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>{' '}
                </li>
                <li className="text-gray-400">
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>{' '}
                </li>
                <li className="text-gray-400">
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>{' '}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <div className="mt-4 space-y-6">
              <div className="h-2 bg-gray-200 rounded-full w-48"></div>
              <div className="h-2 bg-gray-200 rounded-full w-48"></div>
              <div className="h-2 bg-gray-200 rounded-full w-48"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductLoading;
