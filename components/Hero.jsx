import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-700 from-25% via-emerald-500 via-60% to-emerald-300 to-100% min-h-screen flex items-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            ZenLab?
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
            Technology solution for your business and community, we help you to
            making challanges possible.
          </p>
          <a
            href="#"
            className="inline-flex text-white items-center justify-center px-5 py-3 text-base font-medium text-center border border-white rounded-lg hover:bg-white hover:text-emerald-500 focus:ring-4 focus:ring-white"
          >
            Get Started
          </a>
        </div>
        <div className="hidden mx-32 lg:mt-0 lg:col-span-5 lg:flex w-96 h-96">
          <img
            src="/images/data-server.png"
            alt="mockup"
            className="animate-pulse drop-shadow-[0_80px_120px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
