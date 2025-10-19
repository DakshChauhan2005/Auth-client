import React, { useCallback } from "react";

const Hero = React.memo(function Hero() {
  return (
    <main className="flex-1 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column */}
          <div className="md:w-1/2">
            <p className="text-sm text-gray-400 mb-4 max-w-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
              <span className="text-indigo-400 cursor-pointer">Read more →</span>
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white max-w-xl">
              Data to enrich your <br /> business
            </h1>

            <p className="text-gray-400 mt-6 max-w-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>

            <CTAs />
          </div>

          {/* Right column - image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=60"
              alt="Person using a laptop at sunset"
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
});

/* CTA buttons extracted so they won't be re-created on every render */
const CTAs = React.memo(function CTAs() {
  // Placeholder handlers; use useCallback if these will change and passed down
  const onGetStarted = useCallback(() => {
    // example: navigate or open modal
    // console.log("Get started clicked")
  }, []);

  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <button
        type="button"
        onClick={onGetStarted}
        className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md font-semibold"
      >
        Get started
      </button>

      <button
        type="button"
        className="text-indigo-400 hover:text-indigo-300 font-semibold"
      >
        Learn more →
      </button>
    </div>
  );
});

export default Hero;