import React, { useCallback, useRef, useState } from "react";
import "../CSS/WebcamCapture.css";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const videoConstraints = {
  width: 350,
  height: 430,
  facingMode: "user",
};

function WebcamCapture({ login }) {
  const webcamRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hidden, sethidden] = useState(false);
  const [cameraImage, setcameraImage] = useState("");
  const [base64S, setbase64S] = useState({
    imageUrl: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setbase64S({ ...base64S, imageUrl: imageSrc });

    // const user = {
    //   name: name,
    //   email: email,
    // };
    setcameraImage(imageSrc);
    // console.log(cameraImage);
    sethidden(true);
  }, [webcamRef]);

  const registerPart = async (e) => {
    e.preventDefault();
    // console.log(base64S);

    // console.log(base64S);
    const jsobject = {
      imageUrl: base64S.imageUrl,
      name: name,
      email: email,
    };

    await axios
      .post("http://localhost:3003/faceregister", jsobject)
      .then((res) => {
        toast.success("You are register by in our database", {
          autoClose: 3000,
        });
        history.push("/");
      });
  };

  const loginPart = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3003/facelogin", base64S).then((res) => {
      // console.log(res);
      console.log(res.data);
      if (res.data.response) {
        history.push("/home");
      } else {
        toast.warning("You are not Recognize by our system", {
          autoClose: 10000,
        });
        history.push("/");
      }
    });
  };

  return (
    <div className="webCapture">
      <form className="video_capture">
        <div className="user_info">
          <div className="input_username">
            <input
              type="text"
              className="input_username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="USERNAME"
            />
          </div>
          <div className="input_useremail">
            <input
              type="email"
              className="input_useremail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="USERNAME EMAIL"
            />
          </div>
        </div>
        <div className="video_capture">
          {!hidden && (
            <>
              <Webcam
                audio={false}
                height={430}
                ref={webcamRef}
                width={350}
                screenshotFormat="image/jpg"
                videoConstraints={videoConstraints}
                className="webcamCapture"
                name="imageUrl"
              />
              <RadioButtonUncheckedIcon
                className="webcamCapture_button"
                onClick={capture}
                fontSize="large"
              />
            </>
          )}
          {hidden && (
            <>
              <img
                src={cameraImage}
                alt="image is not found"
                className="webcamCapture"
              />
              {!login && (
                <Button className="webcamCapture_button" onClick={registerPart}>
                  Register
                </Button>
              )}
              {login && (
                <Button className="webcamCapture_button" onClick={loginPart}>
                  Login
                </Button>
              )}
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default WebcamCapture;
