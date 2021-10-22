import React from 'react'

import "./components.css"

const Navigation = (props) => {
    return (
        <div className="navigation-wrapper">
            <nav>
                <div className="brand">{props.brand}</div>
                <ul>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Products</li>
                    <li className="nav-item">Services</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Login</li>
                </ul>
            </nav>
        </div>
    )
}


export default Navigation