import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import { BellIcon, XIcon } from '@heroicons/react/outline';

import { useAuth } from '@/contexts/auth';
import { signOutUser } from '@/lib/firebase';
import { classNames } from '@/lib/classNames';

import { userNavigation, navigation } from '@/data/home';

const DisplayMobileMenuItem = ({ isAuth, item, close }) => {
  if (!item.protected || isAuth) {
    return (
      <Link href={item.href} key={item.name}>
        <a
          onClick={() => close()}
          className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium 
                                    hover:bg-gray-100 hover:text-gray-800"
        >
          {item.name}
        </a>
      </Link>
    );
  }
  return <></>;
};

const HeaderMobileMenu = ({ close }) => {
  const router = useRouter();
  const { user, isAuth } = useAuth();

  const newArray = Array.from(navigation, (each) => {
    if (each.href === router.pathname) each.current = true;
    if (each.href != router.pathname) each.current = false;
    return each;
  });

  return (
    <>
      <Transition.Root as={Fragment}>
        <div className="lg:hidden">
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                <div className="pt-3 pb-2">
                  <div className="flex items-center justify-between px-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className="bg-white rounded-md p-2 inline-flex items-center 
                                                justify-center text-gray-400 hover:text-gray-500 
                                                hover:bg-gray-100 focus:outline-none focus:ring-0
                                                focus:ring-inset focus:ring-cyan-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  {user && (
                    <div className="pt-4 mt-4 pb-4 border-t-2 border-b-2 ">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        </div>

                        <div className="ml-3 min-w-0 flex-1">
                          <div className="text-base font-medium text-gray-800 truncate">
                            {user.displayName}
                          </div>
                          <div className="text-sm font-medium text-gray-500 truncate">
                            {user.email}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full 
                                  hover:text-gray-500 focus:outline-none 
                                  focus:ring-0 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-3 px-2 space-y-1">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium 
                                      hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </a>
                        ))}

                        <div
                          key="signoutMain"
                          onClick={async () => {
                            console.log('SIGN OUT');
                            await close();
                            await signOutUser();
                          }}
                          className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium 
                                hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer"
                        >
                          Sign out
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="mt-3 px-2 space-y-1">
                    {newArray.map((item) => (
                      <DisplayMobileMenuItem
                        close={close}
                        isAuth={isAuth}
                        item={item}
                        key={item.name}
                      />
                    ))}
                  </div>
                  {!isAuth && (
                    <div className="pt-2 mt-4  border-t-2">
                      <DisplayMobileMenuItem
                        close={close}
                        isAuth={isAuth}
                        item={{ name: 'login', href: '/login' }}
                        key="login"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </div>
      </Transition.Root>
    </>
  );
};

export default HeaderMobileMenu;
