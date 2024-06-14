import React from 'react';
import user from "../../assets/images/user.svg";
import cart from "../../assets/images/cart.svg";

export default function Navbar() {
    return (
        <>
            <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
                <div className="container">
                    <a className="navbar-brand" to="/">Furni<span>.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <span>Shop</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <span>Services</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li>
                                <a className="nav-link">
                                    <img src={user} alt="User" />
                                </a>
                            </li>
                            
                            <li>
                                <a className="nav-link">
                                    <img src={cart} alt="Cart" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
