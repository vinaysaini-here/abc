import React from "react";
import HomeImage from "../Images/Second.jpg";
import ServiceCard from "../Components/ServiceCard"
import ProgressBar from "../Components/ProgressBar"

const Home = () => {
  const services = [
    {
      img: "https://www.ignet.co.uk/wp-content/uploads/2021/11/information-management-80x80.png",
      title: "MANAGED IT SERVICE",
      desc:
        "We manage and maintain your entire IT infrastructure including workstations, laptops, servers, wifi, internet connection, and more. It's like having your own full-time IT Manager.",
    },
    {
      img: "https://www.ignet.co.uk/wp-content/uploads/2021/11/laptop-80x80.png",
      title: "IT PROJECTS",
      desc:
        "Whether you need an IT engineer on-site or remote support, you can easily request same-day service. We will assist you with your IT requirements.",
    },
    {
      img: "https://www.ignet.co.uk/wp-content/uploads/2021/11/technical-support-80x80.png",
      title: "IT CONSULTANCY",
      desc:
        "We help you align your IT strategy with your business goals and optimize technology investments for long-term success.",
    },
    {
      img: "https://www.ignet.co.uk/wp-content/uploads/2021/11/router-80x80.png",
      title: "LEASED FIBRE BROADBAND",
      desc:
        "Fully managed service provides uninterrupted Internet with flexible bandwidth management and business-only network.",
    },
  ];

  const stats = [
    { label: "Computers", value: 1093, percent: 100 },
    { label: "Network Devices", value: 820, percent: 70 },
    { label: "Servers", value: 77, percent: 50 },
  ];

  return (
    <>
      {/* HERO */}
      <div className="relative w-full">
        <img
          src={HomeImage}
          alt="background"
          className="w-full h-[80vh] object-cover md:h-[650px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-[roboto] leading-tight">
            MANAGED IT
          </h1>
          <span className="font-bold text-3xl md:text-5xl font-[roboto] leading-tight">
            SERVICES AND SUPPORT
          </span>
          <p className="mt-2 max-w-md text-lg">
            We help you build amazing digital experiences.
          </p>
          <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-3xl font-semibold text-lg transition duration-300 hover:scale-105">
            Discover more
          </button>
        </div>
      </div>

      {/* THE WAY WE WORK */}
      <section className="bg-cyan-500">
        <div className="max-w-screen-xl mx-auto md:flex p-6 md:p-10">
          {/* Left */}
          <div className="text-white md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider pt-6">
              Ready to get more creative
            </h3>
            <h1 className="text-4xl font-bold mt-2 mb-4">The Way We Work</h1>
            <p className="text-[16px]">
              We aim to be more than just technically proficient; we aim to provide professional, accountable solutions and service to our customers. You will see the difference every step of the way – communication, project management, service, and follow-up.
            </p>
          </div>
          {/* Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-white">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS BARS */}
      <section>
        <div className="max-w-screen-xl mx-auto md:flex p-6 md:p-10">
          {/* Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-10">
            <img
              src="https://www.ignet.co.uk/wp-content/uploads/2021/12/video-poster-2-1-1.png"
              alt="computer"
              className="h-[600px] w-auto"
            />
          </div>
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-1 bg-sky-500 mb-4"></div>
            <h5 className="text-sm font-semibold uppercase tracking-widest text-gray-600 mb-2">
              IT Services Beyond Imagination
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              We Manage and Support
            </h2>
            <div className="space-y-6">
              {stats.map((item, idx) => (
                <ProgressBar key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
