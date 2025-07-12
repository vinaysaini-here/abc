import React from "react";

const ServiceCard = ({ img, title, desc }) => (
  <div className="group p-4 rounded-lg hover:bg-cyan-600 transition duration-300">
    <img src={img} alt={title} className="h-20 w-20 mb-4" />
    <h1 className="text-2xl font-bold mb-2">{title}</h1>
    <p className="text-[16px]">{desc}</p>
  </div>
);

export default ServiceCard;
