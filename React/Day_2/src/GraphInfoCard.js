import React from "react";


function GraphInfoCard({ title, description }) {
  return (
    <div className="max-w-sm rounded-lg shadow-lg p-4 bg-white transition-transform hover:scale-105">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default GraphInfoCard;
