import React from "react";

const Services = () => {
  return (
    <>
      {/* Banner */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://www.ignet.co.uk/wp-content/uploads/2021/12/banner-support-1.jpg')",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            IT Support Service
          </h1>
        </div>
      </section>

      {/* Service description */}
      <section className="max-w-screen-xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600">
          We offer comprehensive IT support solutions tailored to your business needs.
          From managed services to on-demand troubleshooting, our team is here to help.
        </p>
      </section>

      {/* All Inclusive Section */}
      <section className="max-w-screen-xl mx-auto py-12 px-4">
        {/* Decorative small heading */}
        <h6 className="text-[15px] text-[#0c121f] leading-[26px] text-center font-semibold tracking-wide uppercase mb-2">
          All Inclusive
        </h6>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Complete IT Solutions Tailored for Your Business
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Our all-inclusive services cover everything you need to keep your business
          running smoothly—from managed IT support and infrastructure setup to
          network security, cloud solutions, and on-demand consulting. Enjoy the peace
          of mind that comes with a single, reliable partner for all your technology needs.
        </p>
      </section>
    </>
  );
};

export default Services;
