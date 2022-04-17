import React from 'react';

import Image from 'next/image';

const Custom404 = () => {
  return (
    <div>
      <div
        className="flex flex-row justify-center items-center p-20
                        mx-auto px-4 sm:px-6 md:max-w-9xl lg:px-8 bg-white mx-8 
                          rounded-lg p-5 shadow overflow-hidden"
      >
        <div className="flex w-1/2 pr-5 justify-end">
          <div
            style={{ position: 'relative', width: '200px', height: '300px' }}
          >
            <Image src="/palmtree.png" alt="Vercel Logo" layout={'fill'} />
          </div>
        </div>
        <div className="flex flex-col w-1/2 pl-5 text-gray-700 justify-start">
          <div className="font-bold text-3xl italic">404</div>
          <div className="font-bold text-4xl italic">So sorry....</div>
          <div className="pt-8 text-xl space-y-4 lg:space-y-2">
            <p>We could not find that page.</p>
            <p>Most likely we went to the beach....</p>
            <p>We might be back later</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
