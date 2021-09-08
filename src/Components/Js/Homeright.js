import React from "react";
import "../CSS/Home.css";

function Homeright({title,img,color}) {
  return (
    <div className="home_rightcontainer">
        <div className="grid_container" style={{backgroundColor:color}}>
          <img src={img} alt="" />
          <h1>{title}</h1>
        </div>
    </div>
  );
}

export default Homeright;
