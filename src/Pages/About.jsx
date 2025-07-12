import React from "react";

const reasons = [
  {
    title: "Fast",
    description:
      "Our emergency response time is up to 15 minutes or less guaranteed. For all other IT queries we will answer your email or call within 1 hour.",
    icon: "https://cdn-icons-png.flaticon.com/512/2909/2909590.png",
  },
  {
    title: "Reliable",
    description:
      "We ensure the ongoing operations of your systems, and understand their importance to your business. This makes IGNET your reliable partner.",
    icon: "https://cdn-icons-png.flaticon.com/512/1039/1039716.png",
  },
  {
    title: "Friendly",
    description:
      "We build our business relationship with customers not only on trust, but on real friendship. More details in the pub on Friday night.",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    title: "Efficient",
    description:
      "We complete projects quickly without sacrificing quality or security.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
  },
  {
    title: "Experienced",
    description:
      "Our team has decades of combined experience in IT services and support.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Secure",
    description:
      "We keep your data safe with advanced security measures and monitoring.",
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    title: "Proactive",
    description:
      "We identify and resolve issues before they impact your business.",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
  {
    title: "Supportive",
    description:
      "Our support team is always available to help you with any questions or needs.",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
  },
  {
    title: "Flexible",
    description:
      "We adapt to your requirements and customize solutions for your unique needs.",
    icon: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
  },
];

const About = () => {
  return (
    <>
      {/* Banner Section */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.ignet.co.uk/wp-content/uploads/2021/12/about-banner.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white px-4 py-2 rounded">
          ABOUT US
        </h1>
      </section>

      {/* Reasons Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          9 reasons why IGNET Group is right choice for you.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={reason.icon}
                alt={reason.title}
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
