import { useState } from "react";
import "./Index.css";
import Header from "./components/Header/Header";
import ProductPage from "./components/Product/ProductPage";
import { productImages } from "./data";

function App() {
    return (
        <>
            <div className="container mx-auto lg:px-4">
                <Header />
                <ProductPage images={productImages} />
            </div>
        </>
    );
}

export default App;
