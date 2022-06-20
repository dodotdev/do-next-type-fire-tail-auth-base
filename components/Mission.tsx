import React from 'react';

import Image from 'next/image';

import check from '/public/img/check.jpg';

const Mission = () => {
  return (
    <div className="md:mt-12 px-6 md:px-24">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center md:w-2/3 mx-auto p-6">
          <div>
            <div className="text-center  font-semibold  text-2xl md:text-4xl pb-4 italic text-slate-700">
              Our Mission
            </div>
            <blockquote className="text-center text-lg md:text-2xl italic md:mx-24 text-slate-600">
              We are dedicated to empowering and supporting the women who work
              and live on the islands through networking, mentorship, continuing
              education and career advancement.
            </blockquote>
          </div>
        </div>
        <div
          className="relative flex md:pt-0 h-[296px] w-auto
                     md:w-1/3 rounded shadow-lg overflow-hidden "
        >
          <Image
            className="object-cover"
            layout={'fill'}
            src={check}
            alt="Scholarship award"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
