import React from 'react';

const FooterNewsletter = () => {
  return (
    <div className="mt-10 mb-10 xl:mt-0">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Subscribe to our newsletter
      </h3>
      <p className="mt-4 text-base text-gray-500">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center 
                            bg-gradient-to-r from-green-400 to-green-400 bg-origin-border 
                            px-4 py-2 border border-transparent text-base font-medium 
                            rounded-md shadow-sm text-white hover:from-green-600 hover:to-green-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterNewsletter;
