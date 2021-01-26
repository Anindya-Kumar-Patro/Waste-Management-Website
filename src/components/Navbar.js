import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container-fluid col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand navstart" to="/">City Cleaner</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navmenus">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item navmenus">
                        <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                        </li>
                        <li className="nav-item navmenus">
                        <NavLink className="nav-link" to="/waste-management">Waste Management</NavLink>
                        </li>
                        <li className="nav-item navmenus">
                        <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                        </li>
                        
                    </ul>
                    <div className="d-flex">
                        <NavLink to="/sign-in">
                        <button className="btn signin-styling" type="submit">Sign In</button>
                        </NavLink>
                        <NavLink to="/sign-up"> 
                        <button className="btn signup-styling" type="submit">Sign Up</button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
