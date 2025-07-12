import React from "react";

const Support = () => {
  return (
    <>
      <section className="w-full min-h-[300px] bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-xl text-center">
          {/* Logo */}
          <a href="https://www.ignet.co.uk/">
            <img
              src="https://www.ignet.co.uk/wp-content/uploads/2022/02/IGNET-Logo.png"
              alt="IGNET Group"
              className="mx-auto h-20 mb-6"
            />
          </a>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Download our Remote Support App
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Click{" "}
            <a
              href="https://sos.splashtop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 font-semibold hover:underline"
            >
              here
            </a>{" "}
            to download our remote support app and provide the 9-digit ID to our engineer.
          </p>

          {/* Button */}
          <a
            href="https://sos.splashtop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Download Support App
          </a>
        </div>
      </section>
    </>
  );
};

export default Support;
