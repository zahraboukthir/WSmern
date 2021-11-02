import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  // const isLoading = useSelector((state) => state.authReducer.isLoading);
  // we dont need to wait for loading cause we are blocking the components rendring in the app
  //waiting for the loading
  if (!isAuth) {
    return <Redirect to="/login" />;
  } else return <Route path={path} component={Component} {...rest} />;
};

export default PrivateRoute;
