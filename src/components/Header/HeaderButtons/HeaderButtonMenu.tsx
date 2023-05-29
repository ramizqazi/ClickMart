import { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { LogOut, ShoppingCart, Heart, Menu as MenuIcon } from 'react-feather';

import HeaderSearch from '../HeaderSearch';
import HeaderButton from './HeaderButton';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderButtonMenu({ user }: { user?: any }) {
  const wishList = user?.wishList;
  return (
    <Menu as="div" className="block md:hidden relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  px-3 py-2">
          <MenuIcon color="white" size={25} aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10  w-56 origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className="px-2 py-2">
              <HeaderSearch />
            </div>
            <Menu.Item>
              {({ active }) => (
                <>
                  {!user ? (
                    <Link
                      href="/auth/sign-in"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}>
                      Sign In
                    </Link>
                  ) : (
                    <HeaderButton
                      title="Wish List"
                      icon={<Heart />}
                      count={wishList.length}
                    />
                  )}
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  {!user ? (
                    <Link
                      href="/auth/sign-up"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}>
                      Sign Up
                    </Link>
                  ) : (
                    <HeaderButton
                      title="Your Cart"
                      icon={<ShoppingCart />}
                      count={2}
                    />
                  )}
                </>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
