import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/resetPassword/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
