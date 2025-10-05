import React, { useState } from "react";
import "./Index.css";
import Header from "./components/Header/Header";
import ProductPage from "./components/Product/ProductPage";
import { productImages } from "./data";

export default function App() {
    const [shoppingCart, setShoppingCart] = useState([]);

    const addItemToCart = (count) => {
        if (count <= 0) return;

        const newItem = {
            id: Date.now(),
            name: "Fall Limited Edition Sneakers",
            price: 125,
            count,
        };
        setShoppingCart([...shoppingCart, newItem]);
    };

    const removeItem = (itemId) => {
        setShoppingCart(shoppingCart.filter((item) => item.id !== itemId));
    }

    return (
        <>
            <Header items={shoppingCart} onRemove={removeItem} />
            <ProductPage images={productImages} onAddItem={addItemToCart} />
        </>
    );
}
