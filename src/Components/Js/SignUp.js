import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "../CSS/SignUp.css";
import WebcamCapture from "./WebcamCapture";

function SignUp() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="signup">
      {((login ? !login : login) || login? register : !register) && (
        <div className="container">
          <div className="Sign_In">
            <Button className="login_btn" onClick={()=> setLogin(true)} >LOGIN</Button>
          </div>
          <p>OR</p>
          <div className="Sign_up">
            <Button className="register_btn" onClick={() => setRegister(true)} >REGISTER</Button>
          </div>
          <div className="copyright">
            <p>This is Copywrite</p>
          </div>
        </div>
      )}
      {login && <WebcamCapture login={true} />}
      {register && <WebcamCapture login={false} />}
    </div>
  );
}

export default SignUp;
