import React, { Component } from "react";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";

export default class ProductPage extends Component {
    render() {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-28 lg:px-10 lg:pt-20">
                <ProductGallery images={this.props.images} />
                <ProductInfo />
            </div>
        );
    }
}
