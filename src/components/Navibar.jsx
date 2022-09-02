import {
  faHeart,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
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
            src="https://icons.veryicon.com/png/o/object/color-icon/handbag-11.png"
            alt="Site Icon"
            classNameName="img-fluid"
          />
          <span id="brand-name">ULTRA</span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
              5
            </span>
          </button>
          <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faHeart} />
            <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
              2
            </span>
          </button>
          <button className="btn" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                HOME
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                COLLECTION
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                SPECIALS
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                BLOGS
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-dark">
                POPULAR
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}
