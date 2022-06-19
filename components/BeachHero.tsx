import React from 'react';
import Image from 'next/image';

const BeachHero = () => {
  return (
    <div className="w-full">
      <div style={{ position: 'relative', width: '100%', height: '800px' }}>
        <Image alt="beach" src="/img/beach.jpeg" className="" layout={'fill'} />
      </div>
    </div>
  );
};

export default BeachHero;
