import { Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const HeaderMenuButton = ({ open }) => {
  return (
    <div className="flex flex-row justify-between lg:hidden w-full">
      <div></div>
      <div className="flex text-blue-100 tracking-wider text-xl items-center -ml-2 ">
        SanCapBWA
      </div>

      <div className="flex -mr-2">
        {/* Mobile menu button */}
        <Popover.Button
          className="bg-transparent p-2 rounded-md inline-flex items-center 
                                justify-center text-white hover:text-white hover:bg-white 
                                hover:bg-opacity-10 focus:outline-none focus:ring-0 focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          )}
        </Popover.Button>
      </div>
    </div>
  );
};

export default HeaderMenuButton;
