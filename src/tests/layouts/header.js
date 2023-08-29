import React from "react";
import './header.css'
import Button from '../components/button'

const Header = () => {
    return (
        <div id="header-container">
            <h2>Pablo Couto</h2>
            <div id="buttons">
                <Button
                    name="Home"
                    click="" />
                <Button
                    name="Formações" />
                <Button
                    name="Sobre Mim" />
                <Button
                    name="Contato" />
            </div>
        </div>
    )
}

export default Header