import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/AuthForms/Login";
import Register from "./components/AuthForms/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { getAuthUser } from "./JS/actions/authActions";

import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);

  //Load the app the first time waiting for the getAuthUser response
  if (isLoading) {
    return <h1> Loaading ......</h1>;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
