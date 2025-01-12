import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./screens/Profile";
import PermissionDenied from "./screens/PermissionDenied";

const ProtectedRoutes = () => {
  return (
    <div>
      <Header />
      <article className="app__content">
        <main>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="permission-denied" element={<PermissionDenied />} />
          </Routes>
        </main>
      </article>
    </div>
  );
};

export default ProtectedRoutes;
