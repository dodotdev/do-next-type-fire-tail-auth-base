/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import HeroIntro from '@/containers/HeroIntro';
import BeachHero from '@/components/BeachHero';
import Welcome from '@/components/Welcome';
import Mission from '@/components/Mission';

import AboutUsMain from '@/components/AboutUsMain';

export default function Main() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-7xl lg:px-8">
      <HeroIntro />
      <Mission />
      <AboutUsMain />
    </div>
  );
}
