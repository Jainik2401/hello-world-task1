import React from "react";
import "./dashboard.css";
import Navbar from "../navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Welcome To dashboard</h1>
      </div>
    </>
  );
};
export default Dashboard;
