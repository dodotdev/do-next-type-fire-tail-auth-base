import Link from 'next/link';

import { classNames } from '@/lib/classNames';
const HeaderAuthRightMenu = () => {
  return (
    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
      <div>
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
      <div className="rounded-md sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="w-full flex items-center justify-center 
                            bg-gradient-to-r from-green-400 to-green-400 bg-origin-border 
                            px-4 py-1 border border-transparent text-base font-medium 
                            rounded-md shadow-sm text-white hover:from-green-600 hover:to-green-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeaderAuthRightMenu;
