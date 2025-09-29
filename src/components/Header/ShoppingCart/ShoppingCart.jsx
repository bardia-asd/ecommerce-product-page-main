import React, { Component } from "react";
import Icon from "../../common/Icon";
import Cart from "./Cart";

export default class ShoppingCart extends Component {
    constructor(params) {
        super(params);

        this.state = {
            isOpen: false,
        };

        this.toggleCart = this.toggleCart.bind(this);
    }

    toggleCart() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { items, onRemove } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="relative">
                <button
                    className="relative flex items-center justify-center w-8 h-8 text-dark-grayish-blue hover:text-very-dark-blue transition-colors duration-150 cursor-pointer"
                    onClick={this.toggleCart}>
                    <Icon name={"shopping-cart"} size={24} />
                    {items.length > 0 && (
                        <span className="absolute -top-0.5 -right-1 flex items-center justify-center w-4.5 h-3.5 rounded-full bg-orange text-[10px] text-white">
                            {items.reduce(
                                (prevCount, count) => prevCount + count.count,
                                0
                            )}
                        </span>
                    )}
                </button>

                <Cart isOpen={isOpen} items={items} onRemove={onRemove} />
            </div>
        );
    }
}
