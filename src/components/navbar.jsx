import React from 'react'
import logo from "../components/logo.png"
import "./navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <button className="lumosAcademy">Lumos Academy</button>
        </div>
    )
}

export default navbar