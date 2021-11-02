import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/authActions";

export default function () {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as:{" "}
        <Link to="/dashboard"> {user.name + " " + user.lastName} </Link>
      </Navbar.Text>
      <Button
        onClick={() => dispatch(logout())}
        variant="danger"
        className="m-2"
      >
        Logout
      </Button>
    </Navbar.Collapse>
  );
}
