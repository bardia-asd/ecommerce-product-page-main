import React, { Component } from "react";
import Icon from "../../common/Icon";

/**
 * ProductInfo Component
 *
 * A class-based React component that displays product information including:
 * - Company name and product title
 * - Product description
 * - Pricing with discount information
 * - Quantity selector with increment/decrement controls
 * - Add to cart functionality
 *
 * State:
 * @param {number} count - Current quantity selected by the user
 */
export default class ProductInfo extends Component {
    constructor(params) {
        super(params);

        // Initialize component state
        this.state = {
            count: 0, // Quantity counter for product selection
        };

        // Bind methods to maintain 'this' context
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    /**
     * Increments the quantity counter by 1
     */
    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    /**
     * Decrements the quantity counter by 1
     * Prevents counter from going below 0
     */
    decrementCount() {
        this.setState((prevState) => ({
            count: prevState.count > 0 ? prevState.count - 1 : 0,
        }));
    }

    render() {
        return (
            <div className="px-5 xl:pt-15">
                {/* Company name */}
                <p className="uppercase text-dark-grayish-blue text-sm tracking-wider font-medium">
                    Sneaker Company
                </p>

                {/* Product title */}
                <h1 className="max-w-md font-bold text-3xl sm:text-4xl xl:text-5xl mt-2 lg:mt-4">
                    Fall Limited Edition Sneakers
                </h1>

                {/* Product description */}
                <p className="max-w-md mt-8 lg:mt-10 text-dark-grayish-blue">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer.
                </p>

                {/* Pricing section with discount */}
                <div className="flex lg:flex-col justify-between items-center lg:items-start gap-2 mt-5">
                    <div className="flex items-center gap-4">
                        {/* Current price */}
                        <p className="font-bold text-2xl">$125.00</p>
                        {/* Discount badge */}
                        <span className="flex items-center justify-center w-11 h-6 rounded-sm bg-very-dark-blue text-white text-sm">
                            50%
                        </span>
                    </div>
                    {/* Original price (crossed out) */}
                    <p className="font-semibold lg:font-medium text-dark-grayish-blue line-through">
                        $250.00
                    </p>
                </div>

                {/* Quantity selector and add to cart section */}
                <div className="flex flex-col lg:flex-row items-center gap-3 mt-6">
                    {/* Quantity counter with increment/decrement buttons */}
                    <div className="flex items-center justify-between h-11 px-2 rounded-md bg-light-grayish-blue w-full lg:w-1/3">
                        <button
                            className="flex items-center justify-center w-9 h-full text-orange cursor-pointer"
                            onClick={this.decrementCount}>
                            <Icon name={"minus"} size={16} />
                        </button>
                        {/* Current quantity display */}
                        <span className="font-medium">{this.state.count}</span>
                        <button
                            className="flex items-center justify-center w-9 h-full text-orange cursor-pointer"
                            onClick={this.incrementCount}>
                            <Icon name={"plus"} size={16} />
                        </button>
                    </div>

                    {/* Add to cart button */}
                    <button className="flex items-center justify-center gap-3 h-11 bg-orange hover:bg-orange/60 rounded-md w-full lg:w-2/3 cursor-pointer transition-colors duration-150">
                        <Icon name={"shopping-cart"} size={20} />
                        Add to cart
                    </button>
                </div>
            </div>
        );
    }
}
