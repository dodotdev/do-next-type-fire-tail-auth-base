import Link from 'next/link';

import { classNames } from '@/lib/classNames';
const HeaderAuthRightMenu = () => {
  return (
    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
      <Link href="/login">
        <a
          className="text-sm font-medium rounded-md bg-opacity-0 px-3 py-1 
                        hover:bg-gray-300 hover:bg-opacity-20
                          text-cyan-100"
        >
          Login
        </a>
      </Link>
    </div>
  );
};

export default HeaderAuthRightMenu;
