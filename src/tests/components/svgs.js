import React from "react";
import {Fragment} from "react";
import {ReactComponent as ReactLogo} from '../../code.svg'
import './css/svgs.css'

const Image = () => {
    return (
        <Fragment>
            <ReactLogo className="img-hero"/>
        </Fragment>
    )
}

export default Image;