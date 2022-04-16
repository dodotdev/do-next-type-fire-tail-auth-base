import React from 'react';

import { useAuth } from '@/contexts/auth';

const page = 'One';

const one = () => {
  const { user, loading } = useAuth();

  return (
    <div>
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-9xl lg:px-8 bg-white mx-8 
                      rounded-lg p-5 shadow overflow-hidden"
      >
        <h1 className="text-3xl font-bold mb-2">{page}</h1>
        <p>This is the {page} page</p>

        <div className="pt-5">
          <div className="pb-5 font-bold text-2xl">
            {loading ? 'Loading' : ''}
          </div>
          <div className="pb-5 font-bold text-2xl">
            User is: {user ? 'Logged in' : 'Not Logged In'}
          </div>
          {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
      </div>
    </div>
  );
};

export default one;
