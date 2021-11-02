import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <h1> {"Welcome " + user.name + " " + user.lastName} </h1>
    </div>
  );
};

export default Dashboard;
