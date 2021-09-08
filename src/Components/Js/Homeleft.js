import React from "react";
import "../CSS/Home.css";
import ForwardIcon from "@material-ui/icons/Forward";
import { Button } from "@material-ui/core";

function Homeleft() {
  return (
    <div className="home_container">
      <div className="container_up">
        <div className="upper_text">
          <h1>Login/Register Avail Following Facilities</h1>
        </div>
      </div>
      <div className="container_mid">
        <div className="even_text">
          <label>
            <ForwardIcon className="forward_icon" /> Register as New
            Elector/Voter
          </label>
        </div>
        <div className="odd_text">
          <label>
            <ForwardIcon className="forward_icon" /> Register as New
            Elector/Voter
          </label>
        </div>
        <div className="even_text">
          <label>
            <ForwardIcon className="forward_icon" /> Register as New
            Elector/Voter
          </label>
        </div>
        <div className="odd_text">
          <label>
            <ForwardIcon className="forward_icon" /> Register as New
            Elector/Voter
          </label>
        </div>
        <div className="even_text">
          <label>
            <ForwardIcon className="forward_icon" /> Register as New
            Elector/Voter
          </label>
        </div>
        <div className="odd_text">
          <label>
            <ForwardIcon className="forward_icon" /> Register as New
            Elector/Voter
          </label>
        </div>
      </div>
      <div className="container_dow">
          <Button className="btn">
              Login/Register
          </Button>
      </div>
    </div>
  );
}

export default Homeleft;
