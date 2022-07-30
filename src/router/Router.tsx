import React from "react";
import { Routes, Route } from "react-router-dom";

import EditMovie from "../components/pages/editMovie/EditMovie";
import Home from "../components/pages/homeComponent/Home";
import LogIn from "../components/pages/login/LogIn";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/editMovie" element={<EditMovie />} />
      </Routes>
    </div>
  );
};
export default Router;
