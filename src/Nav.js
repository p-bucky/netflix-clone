import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://p7.hiclipart.com/preview/518/320/1007/computer-icons-mobile-app-development-android-my-account-icon.jpg"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav