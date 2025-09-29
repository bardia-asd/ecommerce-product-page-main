import React, { Component } from "react";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";

export default class ProductPage extends Component {
    render() {
        const { onAddItem } = this.props;
        return (
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-28 pt-20 lg:px-10 lg:pt-40">
                    <ProductGallery images={this.props.images} />
                    <ProductInfo onAddItem={onAddItem} />
                </div>
            </div>
        );
    }
}
