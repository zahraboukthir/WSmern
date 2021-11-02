import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <Navbar.Text>
        <Button variant="light" className="mx-1">
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Login
          </Link>
        </Button>
      </Navbar.Text>
      <Navbar.Text>
        <Button variant="light" className="mx-1">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/register"
          >
            Register
          </Link>
        </Button>
      </Navbar.Text>
    </>
  );
}
