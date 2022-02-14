import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import LoginNavbar from "../../components/loginNavbar/LoginNavbar";
import { useNavigate } from "react-router-dom";
import "./resetPassword.scss";

const ResetPassword = () => {
  const history = useNavigate();

  const handleCancelOnClick = () => {
    history("/login");
  };
  return (
    <>
      <LoginNavbar />
      <div className="resetPassword">
        <Paper className="paperContainer" elevation={1}>
          <Typography className="header" variant="h6">
            Find Your Account
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Typography className="instruction">
            Please enter your email address or mobile number to search for your
            account.
          </Typography>
          <TextField
            className="input"
            label="Email address or mobile number"
            size="small"
            variant="outlined"
          />
          <Divider sx={{ width: "100%" }} />
          <div className="buttonContainer">
            <Button
              className="cancelButton"
              onClick={handleCancelOnClick}
              variant="contained"
            >
              Cancel
            </Button>
            <Button className="searchButton" variant="contained">
              Search
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default ResetPassword;
