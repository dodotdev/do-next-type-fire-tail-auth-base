import React from 'react';

import { useRouter } from 'next/router';

const dynamicPage = () => {
  const router = useRouter();
  const { dynamicPage } = router.query;
  return (
    <div>
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-9xl lg:px-8 bg-white mx-8 
                    rounded-lg p-5 shadow space-y-5 overflow-hidden"
      >
        <h1 className="text-3xl font-bold mb-2">{dynamicPage}</h1>
        <p>This is the {dynamicPage} page</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis
          maiores facilis magni molestias soluta possimus, voluptate quos vero
          cumque dicta libero magnam ex, nesciunt molestiae odit omnis fuga
          delectus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae
          eligendi, natus ducimus quod totam maiores fuga commodi, sequi atque
          rem reprehenderit eius quibusdam odit possimus quia sapiente?
          Deleniti, pariatur?
        </p>
      </div>
    </div>
  );
};

export default dynamicPage;
