import React from "react";

import classes from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.child1}>
        <Sidebar />
        
      </div>
      <div className={classes.child2}>
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;