import { useState } from "react";
import React from "react";

function Paragraph() {
  const [visit, setVisit] = useState(false);

  const handleVisit = () => {
    setVisit(!visit); 
  };

  return (
    <div>
      <p style={{ textDecoration: visit ? "line-through" : "none" ,color:"blue",fontSize:"l"}}>
        This is a paragraph.when th button is clicked it srikem else not Strike.....
      </p>
      <button onClick={handleVisit} style={{}}>
        {visit ? "Unstrike" : "Strike"}
      </button>
    </div>
  );
}

export default Paragraph;