import React from 'react';

const page = 'Contact';

const four = () => {
  return (
    <div className="flex justify-center">
      <div
        className="flex max-w-3xl mx-auto mx-4 lg:mx-0  sm:px-0 overflow-hidden 
                  md:max-w-5xl bg-white rounded-lg shadow"
      >
        <main>
          {/* Header */}
          <div className="py-8 bg-slate-100 sm:py-12">
            <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1
                className="text-4xl leading-10 font-extrabold tracking-wide text-slate-600 
                            text-center sm:text-5xl sm:leading-none lg:text-6xl"
              >
                Get in touch
              </h1>
              <p
                className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-slate-500 
                            text-center tracking-wider"
              >
                Convallis feugiat et aliquet pellentesque dictum nisi, velit.
                Egestas fermentum adipiscing risus quam ac consectetur mattis
                turpis tristique.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="https://images.unsplash.com/photo-1514125669375-59ee3985d08b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="relative py-8 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
              <div className="lg:pr-8">
                <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                  <h2 className="text-3xl text-slate-800 font-extrabold tracking-tight sm:text-4xl">
                    Let's work together
                  </h2>
                  <p className="mt-4 text-lg text-slate-500 sm:mt-3">
                    We’d love to hear from you! Send us a message using the form
                    opposite, or email us. We’d love to hear from you! Send us a
                    message using the form opposite, or email us.
                  </p>
                  <form
                    action="#"
                    method="POST"
                    className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-slate-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full shadow-sm sm:text-sm 
                                      focus:ring-green-500 focus:border-green-500 
                                      border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Company
                        </label>
                        <span
                          id="phone-description"
                          className="text-sm text-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-description"
                          className="text-sm text-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          aria-describedby="phone-description"
                          className="block w-full shadow-sm sm:text-sm 
                                      focus:ring-green-500 focus:border-green-500 
                                      border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-slate-700"
                        >
                          How can we help you?
                        </label>
                        <span
                          id="how-can-we-help-description"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="how-can-we-help"
                          name="how-can-we-help"
                          aria-describedby="how-can-we-help-description"
                          rows={4}
                          className="block w-full shadow-sm sm:text-sm focus:ring-green-500 
                                      focus:border-green-500 border border-gray-300 rounded-md"
                          defaultValue={''}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="how-did-you-hear-about-us"
                        className="block text-sm font-medium text-slate-700"
                      >
                        How did you hear about us?
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="how-did-you-hear-about-us"
                          id="how-did-you-hear-about-us"
                          className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full 
                                      sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="text-right sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent 
                                    shadow-sm text-sm font-medium rounded-md text-white 
                                    bg-green-600 hover:bg-green-700 focus:outline-none 
                                    focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default four;
