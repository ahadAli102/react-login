import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { Login } from "./Login";
import { NavLinkCompoonent } from "./NavLinkCompoonent";

export const AppRoutes = () => {
  return (
    <div>
      <NavLinkCompoonent />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
