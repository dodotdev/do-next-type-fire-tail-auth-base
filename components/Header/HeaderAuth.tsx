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

  console.log('OPEN TEST');

  return (
    <>
      <Popover
        as="header"
        className="pb-24 bg-gradient-to-r from-blue-900 to-blue-400"
      >
        {({ open, close }) => (
          <>
            <div className="w-full mx-auto px-4 sm:px-6 md:max-w-9xl lg:px-8">
              <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                <HeaderLogo />
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
