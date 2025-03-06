import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

function Header({ analyticsMode, handleMode, callApi, setCallApi }) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    function handleCallAPI() {
        setCallApi((prevValue) => !prevValue)
    }
    return (
        <header className={`header ${isDarkMode ? "dark" : ""}`}>
            <nav>
                <ul style={{ alignItems: 'center' }}>
                    {!callApi && <li onClick={handleCallAPI}><span>{callApi ? "Show Demo Data " : "Call API"}</span></li>}
                    <li onClick={handleMode}><span>{analyticsMode ? "Card Mode" : "Analytics Mode"}</span></li>
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
