import React from 'react';
import HeroCarousel from './HeroCarousel';

import Image from 'next/image';

const HeroIntro = () => {
  return (
    <>
      <div className="relative rounded-lg bg-white overflow-hidden shadow ">
        <div className=" bottom-0 left-0 overflow-hidden ">
          <Image
            alt="beach"
            src="/img/sanibel.jpeg"
            className=""
            layout={'fill'}
          />
        </div>
        <div className="relative pb-12 ">
          <div
            className="mt-4 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 lg:mt-6 
                          h-[120px] lg:h-[280px]"
          >
            <div
              className="flex flex-col sm:text-center md:mx-auto lg:text-left 
                          "
            >
              {/* <div
                className="flex text-sm lg:text-lg font-semibold uppercase tracking-wide 
                          justify-start 
                           sm:text-base lg:text-lg xl:text-base"
              >
                <div className="flex flex-col  lg:flex-row bg-blue-200 text-blue-500 shadow p-2 rounded">
                  <div className="block lg:hidden">Sanibel Captiva BWA</div>
                  <div className="hidden lg:block">
                    Sanibel Captiva Business Womens Association
                  </div>
                </div>
              </div> */}
              <div
                className="absolute flex flex-col bottom-2 block  tracking-tight font-extrabold 
                          text-2xl sm:text-4xl xl:text-6xl justify-start"
              >
                <div className="text-cyan-100 tracking-wide">
                  We believe in the
                </div>
                <div className="text-cyan-300 lg:text-cyan-500 tracking-wide">
                  Strength of Women.
                </div>
              </div>
            </div>
            {/* <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <HeroCarousel />
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroIntro;
