import { Button } from "@material-ui/core";
import React from "react";
import "../CSS/Footer.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PollIcon from "@material-ui/icons/Poll";
import TimelineIcon from "@material-ui/icons/Timeline";
import LinkIcon from "@material-ui/icons/Link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_up">
        <h1>Other Important</h1>
        <div className="footerup_btn">
          <Button className="btn_footer">
            <LinkIcon /> Link to states/UT CEO'S
          </Button>
          &nbsp;&nbsp;
          <Button className="btn_footer">
            <StarBorderIcon /> Voter Education
          </Button>
          &nbsp;&nbsp;
          <Button className="btn_footer">
            <PollIcon /> Polling Process
          </Button>
          &nbsp;&nbsp;
          <Button className="btn_footer">
            <TimelineIcon /> EVM Machine
          </Button>
          &nbsp;&nbsp;
          <Button className="btn_footer">
            <TimelineIcon /> Compaints & suggestions
          </Button>
          &nbsp;&nbsp;
        </div>
      </div>
      <div className="footer_middle">
        <h1>
          <span style={{ color: "#29b5ee" }}>Contact</span> Us
        </h1>
        <div className="footer_contact">
          <p style={{ color: "#b9b9b9" }}>
            For details of eligibility criteria or any other additional
            information related to electoral forms, kindly visit
          </p>
          <p style={{ color: "white" }}>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://eci.gov.in"
            >
              https://eci.gov.in
            </a>
          </p>
          <p style={{ color: "#b9b9b9" }}>
            For any other technical feedback or issues on the portal kindly send
            your feedback to
          </p>
          <p style={{ color: "white" }}>ECI Technical Support</p>
          <p style={{ color: "#b9b9b9" }}>
            Toll free Number :<span style={{ color: "white" }}>1800111950</span>
          </p>
        </div>
      </div>
      <div className="footer_down">
        <h1>
          <span style={{ color: "#29b5ee" }}>Other</span> Links
        </h1>
        <div className="footer_ele">
          <p style={{ color: "white" }}>Election Commission Of India</p>
          <p style={{ color: "white" }}>Chief Electroal Officer</p>
        </div>
        <div class="copyright">
          <p>
            National Voter's Service Portal &copy; Copyright 2019. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
