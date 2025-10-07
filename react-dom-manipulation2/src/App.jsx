import React, { useState } from "react";
import "./App.css";

export default function App() {
  const paragraphs = [
    "Old id gold",
    "time is money",
    "Health is wealth"
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  return (
    <div className="parent">
      {/* Box 1: button on left, paragraph on right */}
      <div className="box box1">
        <button
          className="btn"
          onClick={() => setIndex1((i) => (i + 1) % paragraphs.length)}
        >
          Click Me
        </button>
        <p className="para">{paragraphs[index1]}</p>
      </div>

      {/* Box 2: paragraph on left, button on right; paragraph font-weight ~400 */}
      <div className="box box2">
        <p className="para">{paragraphs[index2]}</p>
        <button
          className="btn"
          onClick={() => setIndex2((i) => (i + 1) % paragraphs.length)}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}



