import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import GuestLinks from "./GuestLinks";
import AuthLinks from "./AuthLinks";
import { useSelector } from "react-redux";

export default function () {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <Navbar variant="dark" className="bg-primary" style={{ fontWeight: "500" }}>
      <Navbar.Brand href="/">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          AuthApp
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {isAuth ? <AuthLinks /> : <GuestLinks />}
      </Navbar.Collapse>
    </Navbar>
  );
}
