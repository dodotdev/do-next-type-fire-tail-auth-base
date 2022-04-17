import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';

import { navigation } from '@/data/home';
import { classNames } from '@/lib/classNames';

const DisplayMenuItem = ({ isAuth, item }) => {
  if (!item.protected || isAuth)
    return (
      <Link href={item.href} key={item.name}>
        <a
          className={classNames(
            'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-1 hover:bg-opacity-10',
            item.current
              ? 'text-white bg-gray-300 bg-opacity-40 hover:bg-opacity-40'
              : 'text-cyan-100',
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </a>
      </Link>
    );

  return <></>;
};

const TopNav = () => {
  const router = useRouter();
  const { isAuth } = useAuth();

  const newArray = Array.from(navigation, (each) => {
    if (each.href === router.pathname) each.current = true;
    if (each.href != router.pathname) each.current = false;
    return each;
  });

  return (
    <>
      <nav className="flex space-x-4">
        {newArray.map((item) => (
          <DisplayMenuItem isAuth={isAuth} item={item} key={item.name} />
        ))}
      </nav>
      {/* <div className="text-white">
        <pre>{JSON.stringify(newArray, null, 2)}</pre>
      </div> */}
    </>
  );
};

export default TopNav;
