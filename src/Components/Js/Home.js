import React from "react";
import "../CSS/Home.css";
import Footer from "./Footer";
import Homeleft from "./Homeleft";
import Homeright from "./Homeright";

function Home() {
  return (
    <div className="home">
      <div className="home_upper">
        <div className="home_left">
          <Homeleft />
        </div>
        <div className="home_right">
          <div className="home_rightwo">
            <div className="right_top">
              <Homeright
                title="e-EPIC Downloads"
                img="https://www.nvsp.in/Content/images/banner6.png"
                color="rgb(99, 189, 99)"
              />
              <Homeright
                title="Search In Electoral Roll"
                img="https://www.nvsp.in/Content/images/banner1.png"
                color="rgb(255, 193, 7)"
              />
              <Homeright
                title=""
                img="https://www.nvsp.in/Content/images/voter-portal.jpg"
                color="rgb(102, 16, 242)"
              />
            </div>
            <div className="right_top">
              <Homeright
                title="FORMS"
                img="https://www.nvsp.in/Content/images/banner3.png"
                color="rgb(0, 123, 255)"
              />
              <Homeright
                title="Downloads Electoral Roll"
                img="https://www.nvsp.in/Content/images/banner5.png"
                color="rgb(102, 16, 242)"
              />
              <Homeright
                title="Track Application"
                img="https://www.nvsp.in/Content/images/banner2.png"
                color="rgb(32, 201, 151)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home_down">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
