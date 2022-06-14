import React, { useState } from "react";
import "./login.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [remember, setRemember] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const isvalid = () => {
    const reg = /^[ A-Za-z0-9]*$/;
    let flag = true;

    if (userName === "") {
      setUserNameError("Username is Required");
      flag = false;
    } else if (passWord === "") {
      setErrorPassword("Password is Required");
      flag = false;
    } else if (passWord?.length !== 8) {
      setErrorPassword("password must be 8 digit");
      flag = false;
    } else if (!reg.test(passWord)) {
      setErrorPassword("password isn't alpha-numerical");
      flag = false;
    }
    return flag;
  };
  const onSubmit = () => {
    if (isvalid()) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <Typography
        className="login-heading"
        variant="h4"
        component="div"
        gutterBottom
      >
        Log In
      </Typography>
      <form className="login-form">
        <div>
          <TextField
            className="login-input"
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            value={userName}
            onChange={(e) => {
              const uname = e.target.value.replace(/[^a-z]/gi, "");
              setUserName(uname);
              setUserNameError("");
            }}
          />
          <p>{userNameError}</p>
        </div>
        <div>
          <TextField
            className="login-input"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={passWord}
            onChange={(e) => {
              setPassWord(e.target.value);
              setErrorPassword("");
            }}
          />
          <p>{errorPassword}</p>
        </div>
        <div className="login-remember-me">
          <Checkbox
            {...label}
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span>Remember Me</span>
        </div>
        <div className="login-button">
          <Button variant="outlined" onClick={() => onSubmit()}>
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
