import React from "react";
import './css/style.button.css'

const Button = (props) => {
    return(
        <button id="button" onClick={props.click}>{props.name}</button>
    )
}

export default Button