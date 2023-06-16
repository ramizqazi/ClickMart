import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import CartDrawerItem from './CartDrawerItem';
import { CircleLoader } from 'react-spinners';

export default function CartDrawer({
  open,
  setOpen,
  isLoading,
  data,
}: {
  open: boolean;
  isLoading: boolean;
  data: Array<any>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [cartItems, setCartItems] = useState(data);
  const subtotal = cartItems?.reduce(
    (sum: number, product: any) => sum + product.price,
    0,
  );

  useEffect(() => {
    setCartItems(data);
  }, [data]);

  console.log(cartItems);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {!isLoading ? (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200">
                              {cartItems?.length > 0 &&
                                cartItems?.map(
                                  (product: any, index: number) => (
                                    <CartDrawerItem
                                      key={index}
                                      cartItem={product}
                                      cartItems={cartItems}
                                      onCartItemChange={setCartItems}
                                    />
                                  ),
                                )}
                            </ul>
                          ) : (
                            <CircleLoader size={35} color="#999" />
                          )}
                          {!isLoading && cartItems?.length === 0 ? (
                            <p className="text-black text-center my-20">
                              No Items in cart
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{`$${subtotal}`}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700">
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-red-600 hover:text-red-500"
                            onClick={() => setOpen(false)}>
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
