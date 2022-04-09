import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigation } from '@/data/home';
import { classNames } from '@/lib/classNames';

const TopNav = () => {
  const router = useRouter();

  const newArray = Array.from(navigation, (each) => {
    if (each.href === router.pathname) each.current = true;
    if (each.href != router.pathname) each.current = false;
    return each;
  });

  return (
    <div>
      <nav className="flex space-x-4">
        {newArray.map((item) => (
          <Link href={item.href}>
            <a
              key={item.name}
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
        ))}
      </nav>
      {/* <div className="text-white">
        <pre>{JSON.stringify(newArray, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default TopNav;
