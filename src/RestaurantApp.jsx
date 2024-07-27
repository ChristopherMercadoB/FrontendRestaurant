import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home/Home";
import { Navigate } from "react-router-dom";
import Login from "./helpers/Login/Login";
import AuthProvider from "./contexts/AuthContext/AuthContext";

const RestaurantApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<PrivateRoute component={Home} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default RestaurantApp;
