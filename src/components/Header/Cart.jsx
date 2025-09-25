import React, { Component } from "react";
import Icon from "../common/Icon";

export default class Cart extends Component {
    render() {
        return (
            <div>
                <button className="flex items-center justify-center w-8 h-8 text-dark-grayish-blue hover:text-very-dark-blue transition-colors duration-150 cursor-pointer">
                    <Icon name={"shopping-cart"} size={24} />
                </button>
            </div>
        );
    }
}
