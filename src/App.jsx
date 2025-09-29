import React, { Component } from "react";
import "./Index.css";
import Header from "./components/Header/Header";
import ProductPage from "./components/Product/ProductPage";
import { productImages } from "./data";

export default class App extends Component {
    constructor(params) {
        super(params);

        this.state = {
            shoppingCart: [],
        };

        this.addToCart = this.addToCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addToCart(count) {
        const { shoppingCart } = this.state;

        if (count > 0) {
            const newItem = {
                id: shoppingCart.length + 1,
                name: "Fall Limited Edition Sneakers",
                price: 125,
                count,
            };

            this.setState({ shoppingCart: [...shoppingCart, newItem] });
        }
    }

    removeItem(itemId) {
        this.setState((prevState) => ({
            shoppingCart: prevState.shoppingCart.filter(
                (item) => item.id !== itemId
            ),
        }));
    }

    render() {
        const { shoppingCart } = this.state;
        return (
            <>
                <Header items={shoppingCart} onRemove={this.removeItem} />
                <ProductPage
                    images={productImages}
                    onAddItem={this.addToCart}
                />
            </>
        );
    }
}
