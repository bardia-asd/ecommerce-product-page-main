import React, { Component } from "react";
import LogoImage from "../../assets/images/logo.svg";

export default class Logo extends Component {
    render() {
        return (
            <a href="#">
                <img src={LogoImage} alt="Logo" />
            </a>
        );
    }
}
