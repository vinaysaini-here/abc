import React from "react";

const ProgressBar = ({ label, value, percent }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-gray-800">{label}</span>
      <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
        {value}
      </span>
    </div>
    <div className="w-full bg-gray-200 h-1.5 rounded">
      <div
        className="bg-sky-500 h-1.5 rounded transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
