import Welcome from '@/components/Welcome';
import Actions from '@/components/Actions';

import Announcments from '@/components/Announcments';
import Members from '@/components/Members';
import Socials from '@/components/Socials';

export default function Example() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Profile</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {/* Welcome panel */}
            <Welcome />

            {/* Actions panel */}
            <Actions />
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 gap-4">
            {/* Socials */}
            {/* <Socials /> */}
            {/* Announcements */}
            <Announcments />

            {/* Recent Members */}
            <Members />
          </div>
        </div>
      </div>
    </>
  );
}
