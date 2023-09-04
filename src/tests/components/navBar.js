import React from "react";
import './css/navBar.css';
import Button from "./button";

function NavBar() {
    return (
    <header>
        <h2>Logo</h2>
        <ul>
            <Button
            id = "button-header"
            name = "Teste broh"
            />
        </ul>
    </header>
    );
}

export default NavBar;