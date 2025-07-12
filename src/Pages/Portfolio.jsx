import React from "react";

const Portfolio = () => {
  const images = [
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2021/12/20200529_183105226_iOS-scaled.jpg",
      alt: "Project 1",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2021/12/course10.jpg",
      alt: "Project 2",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2021/12/course11.jpg",
      alt: "Project 3",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2018/04/course06.jpg",
      alt: "Project 4",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2018/04/course09.jpg",
      alt: "Project 5",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2018/04/course04.jpg",
      alt: "Project 6",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2018/04/course03.jpg",
      alt: "Project 7",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2018/04/course02.jpg",
      alt: "Project 8",
    },
    {
      src: "https://www.ignet.co.uk/wp-content/uploads/2018/04/course01.jpg",
      alt: "Project 9",
    },
  ];

  return (
    <>
      {/* Banner */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "url('https://www.ignet.co.uk/wp-content/uploads/2021/12/image37-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            PORTFOLIO
          </h1>
          <p className="text-white text-lg mt-2">Our recent projects</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-screen-xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span className="text-white text-lg font-semibold">
                View Full Image
              </span>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Portfolio;
