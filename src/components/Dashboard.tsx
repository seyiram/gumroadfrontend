import React from "react";
import "./DashboardStyles.css";
import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
