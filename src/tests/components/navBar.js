import React from "react";
import './css/navBar.css';
import Button from "./button";

function NavBar() {
    return (
        <header>
            <h2>Logo</h2>
            <ul>
                <Button
                    className="button-header"
                    name="Sobre mim"
                />
                <Button
                    className="button-header"
                    name="Formações"
                />
                <Button
                    className="button-header"
                    name="Contatos"
                />
            </ul>
        </header>
    );
}

export default NavBar;