import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Header({ analyticsMode, handleMode }) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    // console.log(analyticsMode + ' ' + handleMode)

    return (
        <header className={`header ${isDarkMode ? "dark" : ""}`}>
            <nav>
                <ul style={{ alignItems: 'center' }}>
                    {/* <li>
                        <h3>Dashboard</h3>
                    </li> */}
                    <li>Home</li>
                    <li onClick={handleMode}><span>{analyticsMode ? "Analytics Mode" : "Card Mode"}</span></li>
                    <li>
                        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                            {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
