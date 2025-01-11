import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { firebaseAuth } from "./firebase";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/profile" /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
