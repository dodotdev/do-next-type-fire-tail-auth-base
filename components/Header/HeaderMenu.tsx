import { SearchIcon } from '@heroicons/react/solid';

import TopNav from './TopNav';

const HeaderMenu = () => {
  return (
    <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
        {/* Top nav */}
        <div className="hidden lg:block lg:col-span-2">
          <TopNav />
        </div>
        <div className="px-12 lg:px-0">
          {/* Search */}
          <div className="max-w-xs mx-auto w-full lg:max-w-md">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-white focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search"
                className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
