import {
  Button,
  TextField,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React, { useState } from "react";
import Signup from "../Signup/Signup";
import "./login.scss";

const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chris Social</h3>
          <span className="loginDesc">
            Chris Social helps you connect and share with the people in your
            life.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="inputContainer">
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
              ></TextField>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => handlePasswordChange(event)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant="contained" size="large" fullWidth>
                Log In
              </Button>
              <Link
                variant="subtitle2"
                sx={{ textDecoration: "none", textTransform: "none" }}
                href="/resetPassword"
              >
                Forgotten Password?
              </Link>
              <Divider style={{ width: "100%" }} />
              <Button
                className="newAccountButton"
                variant="contained"
                size="large"
                onClick={handleModalOpen}
              >
                Create New Account
              </Button>
            </div>
          </div>
        </div>
        <Signup open={openModal} handleClose={handleModalClose} />
      </div>
    </div>
  );
};

export default Login;
