import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../../styles/SortByModal.css";

const options = [
  { value: 0, label: "Goranboy" },
  { value: 1, label: "Safikurd" },
  { value: 2, label: "Baku" },
  { value: 3, label: "Ganja" },
  { value: 4, label: "Shusha" },
  { value: 5, label: "Agdam" },
];

export default function ReactMultiSelect() {

  

  return (
    <div className="App">
      <h1>{"\u2728"} MultiSelect example</h1>
      
    </div>
  );
}

// ReactDOM.render(<ReactMultiSelect />, document.getElementById("sort"));
