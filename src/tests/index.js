import React from "react";
import './style.css';
import NavBar from './components/navBar';
import Image from "./components/svgs";

const Main = () => {
    return(
        <main>
            <NavBar/>
            <div id="hero">
                <h1>Olá, eu sou Pablo Daniel Couto</h1>
                <Image/>
            </div>
        </main>
    )
}

export default Main