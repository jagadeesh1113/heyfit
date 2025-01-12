import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
import Login from "./screens/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import { firebaseAuth } from "./firebase";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
  });
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ProtectedRoutes />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
