import React, { useState, useEffect } from "react";
import "./App.css";
import GraphInfoCard from "./GraphInfoCard";

function App() {
  const [graphType, setGraphType] = useState("directed");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/graph/${graphType}`)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.description);
      });
  }, [graphType]);

  const toggleGraph = () => {
    setGraphType((prev) => (prev === "directed" ? "undirected" : "directed"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
      <GraphInfoCard title={graphType} description={description} />
      <button onClick={toggleGraph} 
        className="px-4 py-2 mt-4 text-white transition bg-blue-500 rounded hover:bg-blue-600">Toggle Graph Type</button>
    </div>
  );
}

export default App;
