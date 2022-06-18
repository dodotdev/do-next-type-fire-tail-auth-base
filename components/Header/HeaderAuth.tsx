import { Popover } from '@headlessui/react';
import { useAuth } from '@/contexts/auth';

import HeaderAuthRightMenu from './HeaderAuthRightMenu';
import HeaderRightMenu from './HeaderRightMenu';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';
import HeaderMenuButton from './HeaderMenuButton';

const HeaderAuth = () => {
  const { isAuth } = useAuth();

  return (
    <>
      <Popover
        as="header"
        className=" bg-gradient-to-r from-blue-900 to-blue-300"
      >
        {({ open, close }) => (
          <>
            <div className="w-full mx-auto px-4 sm:px-6 md:max-w-9xl lg:px-8">
              <div className="relative flex flex-wrap items-center justify-start lg:justify-between">
                <div className="hidden lg:block text-blue-100 tracking-wider text-2xl  items-center ">
                  SanCapBWA
                </div>
                {isAuth ? <HeaderAuthRightMenu /> : <HeaderRightMenu />}
                <HeaderMenu />
                <HeaderMenuButton open={open} />{' '}
              </div>
            </div>
            <HeaderMobileMenu close={close} />
          </>
        )}
      </Popover>
    </>
  );
};

export default HeaderAuth;
