'use client';
import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  sizes: Array<object | any>;
  selectedSize: object | any;
  onSizeSelect: Dispatch<SetStateAction<{ name: string; inStock: boolean }>>;
}

const ProductSizes = ({ sizes, selectedSize, onSizeSelect }: Props) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
      </div>

      <RadioGroup value={selectedSize} onChange={onSizeSelect} className="mt-4">
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
          {sizes?.map(size => (
            <RadioGroup.Option
              key={size.name}
              value={size?.name}
              disabled={!size.inStock}
              className={({ active }) =>
                classNames(
                  size.inStock
                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                  active ? 'ring-2 ring-red-500' : '',
                  'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                )
              }>
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                  {size.inStock ? (
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-red-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-md',
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor">
                        <line
                          x1={0}
                          y1={100}
                          x2={100}
                          y2={0}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
export default ProductSizes;
