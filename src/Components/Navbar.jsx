import React from "react";
import {NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Navbar() {

  const state = useSelector(state => state.cart.products)


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            MyStore
          </NavLink>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MainMenu" aria-expanded="false" aria-controls="MainMenu" type="button">
            <span className="navbar-icon">
                <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="MainMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item d-lg-none">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-solid fa-right-to-bracket me-1"></i>
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa-solid fa-user-plus me-1"></i>
                Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa-solid fa-cart-shopping me-1"></i>
                Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
