import React from 'react'
import logo from '../images/final_Logo.jpeg';
import {Link} from "react-router-dom"
import '../App.css'

const LoginNavBar = () => {
    return (
        <div>
            {/* This component is used to render the navbar for login page */}
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt = "Work from Mountains"  height="90"/>
                        </Link>
                        <div className="nav-links show-nav">
                        <Link to="/">Home</Link>
                        <Link to="/properties">Properties</Link>
                        <Link to="/about-us">About-Us</Link>
                        </div>                        
                    </div>                    
                </div>                
            </nav >
        </div>
    )
}

export default LoginNavBar

