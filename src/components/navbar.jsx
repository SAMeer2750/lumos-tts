import React from 'react'
import logo from "../components/logo.png"
import "./navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <img src={logo} alt="logo" className="logo"/>
                <hr />
                <p>TTS</p>
            </div>
            <button className="lumosAcademy">Lumos Academy</button>
        </div>
    )
}

export default navbar