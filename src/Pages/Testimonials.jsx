import React from "react";

const Testimonials = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "url('https://www.ignet.co.uk/wp-content/uploads/2021/12/testimonial-banner-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Testimonials
          </h1>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="max-w-screen-xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8">
          Share client feedback and success stories here.
        </p>

        {/* Example Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-700 italic">
              "Fantastic service and excellent support!"
            </p>
            <h4 className="mt-4 font-semibold">- John Doe</h4>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-700 italic">
              "They helped us streamline our entire IT infrastructure."
            </p>
            <h4 className="mt-4 font-semibold">- Jane Smith</h4>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-700 italic">
              "Professional and friendly team. Highly recommended!"
            </p>
            <h4 className="mt-4 font-semibold">- Sarah Johnson</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
