import React from "react";

const Contact = () => {
  return (
    <>
      {/* Banner */} 
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://www.ignet.co.uk/wp-content/uploads/2021/12/image37-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-screen-xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          You can reach us via phone, email, or by filling out the contact form below.
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded p-6 space-y-4 max-w-2xl">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-500 text-white font-semibold px-6 py-2 rounded hover:bg-cyan-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
