import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div className="py-1 flex-shrink-0 lg:static text-white fill-white">
      <Link href="/">
        <a>
          <img
            alt="logo"
            src="seashell.svg"
            className="h-[34px] w-auto text-white fill-white"
          />
        </a>
      </Link>
    </div>
  );
};

export default HeaderLogo;
