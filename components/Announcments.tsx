import React from 'react';
import { announcements } from '@/data/home';

const Announcments = () => {
  return (
    <div>
      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <h2
              className="text-base font-medium text-gray-900"
              id="announcements-title"
            >
              Announcements
            </h2>
            <div className="flow-root mt-6">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <li key={announcement.id} className="py-5">
                    <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a
                          href={announcement.href}
                          className="hover:underline focus:outline-none"
                        >
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {announcement.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {announcement.preview}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcments;
