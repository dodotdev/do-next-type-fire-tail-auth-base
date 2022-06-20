import React, { FC } from 'react';
import Link from 'next/link';

interface AppProps {
  Icon?: FC | null;
  size?: string;
  iconPlacement?: string;
  onClick?: any | null;
  disabled?: boolean;
  url?: string | null;
  children: any;
}

const Button: FC<AppProps> = ({
  Icon = null,
  size = 'md',
  onClick = null,
  disabled = false,
  url = null,
  children,
}) => {
  if (url)
    return (
      <>
        <Link href={url}>
          <a>
            <button
              type="button"
              className="w-full flex items-center justify-center 
                            bg-gradient-to-r from-green-500 to-green-400 bg-origin-border 
                            px-4 py-1 border border-transparent text-base font-medium 
                            rounded-md shadow-sm text-white hover:from-green-600 hover:to-green-500"
            >
              <div className="pl-1">{children}</div>

              {/* <>
                {Icon && (
                  <div className="h-5 w-5 pr-2" aria-hidden="true">
                    <Icon />
                  </div>
                )}
                <div className="pr-1">{children}</div>
              </> */}
            </button>
          </a>
        </Link>
      </>
    );

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        className="inline-flex justify-left py-1
        rounded-md border col-span-3 sm:col-span-3 w-full justify-center
        border-transparent text-lg md:text-xl text-blue-500 items-center font-medium
        hover:text-blue-800  disabled:text-gray-200 disabled:cursor-not-allowed "
        // disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={onClick}
      >
        <>
          {Icon && (
            <div className="h-5 w-5 pr-2" aria-hidden="true">
              <Icon />
            </div>
          )}
          <div className="pl-1">{children}</div>
        </>
      </button>
    </>
  );
};

export default Button;
