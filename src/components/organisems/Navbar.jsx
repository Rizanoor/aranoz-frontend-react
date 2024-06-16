import React from 'react';
import user from "../../assets/images/user.svg";
import cart from "../../assets/images/cart.svg";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
                <div className="container">
                    <Link to="/" className="navbar-brand">Furni<span>.</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link">
                                    <span>Shop</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">
                                    <span>Services</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <a className="nav-link">
                                    <img src={user} alt="User" />
                                </a>
                            </li>
                            
                            <li>
                                <Link to="/cart" className="nav-link">
                                    <img src={cart} alt="Cart" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
