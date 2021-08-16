import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Js/Header";
import Home from "./Components/Js/Home";
import WebcamCapture from "./Components/Js/WebcamCapture";
import SignUp from "./Components/Js/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/">
            <SignUp/>
            {/* <WebcamCapture /> */}
            {/* <Home /> */}
          </Route>
          <Route path="/login">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
