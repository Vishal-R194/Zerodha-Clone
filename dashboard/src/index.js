import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Home from "./components/Home";

console.log("NEW DASHBOARD AUTH CODE RUNNING");

const root = ReactDOM.createRoot(document.getElementById("root"));

const params = new URLSearchParams(window.location.search);
const tokenFromUrl = params.get("token");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);
  window.history.replaceState({}, document.title, window.location.pathname);
}

const token = localStorage.getItem("token");

const loginUrl = "http://localhost:3001/login";

if (!token) {
  window.location.href = loginUrl;
} else {
  axios
    .get("http://localhost:3002/verify-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("VERIFY RESPONSE:", res.data);

      if (!res.data.success) {
        console.log("TOKEN INVALID");
      } else {
        console.log("TOKEN VALID");

        root.render(
          <React.StrictMode>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </React.StrictMode>
        );
      }
    })
    .catch((error) => {
       console.error("Token verification failed:", error);
       localStorage.removeItem("token");
       window.location.href = loginUrl;
      });
}