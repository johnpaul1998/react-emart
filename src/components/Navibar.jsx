import { faShoppingCart, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar py-4 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2611/2611215.png"
            alt="Site Icon"
            classNameName="img-fluid"
          />
          <span id="brand-name">ULTRA</span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          <>
            <NavLink className="btn position-relative" type="button">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="nav-btn-label">CART</span>
              {0}
            </NavLink>
            <NavLink className="btn position-relative" type="button">
              <FontAwesomeIcon icon={faSignOut} />
              <span className="nav-btn-label">LOGOUT</span>
            </NavLink>
          </>
        </div>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse
          className="collapse navbar-collapse order-lg-1"
          id="navMenu"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                HOME
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/products" className="nav-link text-dark">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
