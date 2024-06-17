import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from "../../assets/images/user.svg";
import cart from "../../assets/images/cart.svg";

export default function Navbar() {
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        
        navigate('/login');
    };

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
                            <li className="nav-item dropdown">
                                {userName ? (
                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            Welcome, {userName}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <Link to="/login" className="nav-link">
                                        <img src={user} alt="User" />
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">
                                    <img src={cart} alt="Cart" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
