import React from 'react';
import { useRouter } from 'next/router';

import { navigation } from '@/data/home';

import { classNames } from '@/lib/classNames';

const TopNav = () => {
  const router = useRouter();

  const newArray = Array.from(navigation, (each) => {
    if (each.href === router.pathname) each.current = true;
    return each;
  });

  return (
    <div>
      <nav className="flex space-x-4">
        {newArray.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'text-white' : 'text-cyan-100',
              'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10',
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TopNav;
