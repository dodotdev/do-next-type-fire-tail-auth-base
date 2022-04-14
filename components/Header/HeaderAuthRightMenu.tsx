import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, LogoutIcon } from '@heroicons/react/solid';

import { signOutUser } from '@/lib/firebase';

import { user, userNavigation, navigation } from '@/data/home';

import TopNav from './TopNav';

import { classNames } from '@/lib/classNames';
const HeaderAuthRightMenu = () => {
  return (
    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
      <button
        type="button"
        className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="ml-4 relative flex-shrink-0">
        <div>
          <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
            <Menu.Item key="signout">
              {({ active }) => (
                <div
                  key="signoutMain"
                  onClick={async () => {
                    console.log('SIGN OUT');
                    await signOutUser();
                  }}
                  className={classNames(
                    active ? 'bg-blue-100' : '',
                    'block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer',
                  )}
                >
                  {/* <div className="flex flex-row">
                                <div className="ml-5 mr-3">
                                  <LogoutIcon
                                    className="flex h-5 w-5 text-gray-500"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="text-md tracking-wider text-gray-700"> */}
                  Sign out
                  {/* </div>
                              </div> */}
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default HeaderAuthRightMenu;
