import {
  Box,
  AppBar,
  Toolbar,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import "./loginNavbar.scss";
const LoginNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography className="logo" variant="h6">
            Chris Social
          </Typography>
          <div className="inputContainer">
            <TextField
              sx={{ mr: 1 }}
              size="small"
              label="Email or phone"
              variant="outlined"
            />
            <TextField
              sx={{ mr: 1 }}
              size="small"
              label="Password"
              type="password"
              variant="outlined"
            />
            <Button
              sx={{ textTransform: "none", mr: 1, fontWeight: "800" }}
              //   size="small"
              variant="contained"
            >
              Log In
            </Button>
            <Link className="link" to="/resetPassword">
              Forgotten Account?
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoginNavbar;
