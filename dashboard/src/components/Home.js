import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "https://zerodha-vishal.netlify.app/login";
  };

  return (
    <>
      <TopBar onLogout={handleLogout} />
      <Dashboard />
    </>
  );
};

export default Home;