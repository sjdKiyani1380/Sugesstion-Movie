import React from "react";
import { Routes, Route } from "react-router-dom";

import EditMovie from "../components/pages/editMovie/EditMovie";
import Home from "../components/pages/homeComponent/Home";
import LogIn from "../components/pages/login/LogIn";
import { useAppSelector } from "./../app/hooks";
import NotFound from "./../components/pages/notFound/NotFound";

export const Router = () => {
  const { token } = useAppSelector((store) => store.setUser);

  if (token)
    return (
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/editMovie" element={<EditMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
