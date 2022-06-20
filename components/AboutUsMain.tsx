import React from 'react';
import Image from 'next/image';

import group from '/public/img/group.jpg';
import Button from '@/components/UI/Button';

const AboutUsMain = () => {
  return (
    <div
      className="flex flex-col pb-4 rounded shadow-lg overflow-hidden 
                    bg-white mt-12 md:mt-12 pt-4 md:px-24"
    >
      <div className="text-center font-semibold text-2xl md:text-4xl pb-4 italic text-slate-700">
        Our ladies
      </div>
      <div className="">
        <div
          className="relative flex md:pt-0 h-36 md:h-[366px] w-full  
                        md:rounded md:shadow-lg overflow-hidden   "
        >
          <Image
            className="object-cover"
            layout={'fill'}
            src={group}
            alt="Scholarship award"
          />
        </div>
        <div className="flex flex-col md:flex-row mx-auto pt-2 ">
          {/* <div className="md:w-3/5"> */}
          <div className="flex flex-col">
            <blockquote className="p-4 text-start text-lg md:text-xl  text-slate-600">
              Passion does not begin to describe our feelings for what we do. We
              are united in the belief that our ability to nurture and grow the
              businesses and especially the women of Sanibel and Captiva will
              enlarge and enhance this wonderful world that is our lives on
              island.
            </blockquote>
            <div className="flex justify-end pr-5">
              <Button url="/about">More</Button>
            </div>
          </div>

          {/* <div className="p-4 md:w-2/5 ">HJo</div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
