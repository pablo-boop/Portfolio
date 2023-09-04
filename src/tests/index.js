import React from "react";
import { Fragment } from "react";
import './style.css';
import NavBar from './components/navBar';
import Image from "./components/svgs";
import CodeTxt from "./components/codeText";

const Main = () => {
    return(
        <main>
            <NavBar/>
            <div id="hero">
                <div id="txt-container">
                <h1>Olá, eu sou Pablo Daniel Couto</h1>
                <CodeTxt/>
                </div>
                <Image/>
            </div>
        </main>
    )
}

export default Main