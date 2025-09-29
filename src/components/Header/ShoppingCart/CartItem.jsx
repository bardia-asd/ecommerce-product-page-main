import React, { Component } from "react";
import Icon from "../../common/Icon";
import Product from "../../../assets/images/image-product-1.jpg";

export default class CartItem extends Component {
    render() {
        const { id, name, price, count, onRemove } = this.props;
        return (
            <div className="flex items-center justify-between gap-3">
                <img
                    src={Product}
                    alt="Product"
                    className="w-12 h-12 rounded-sm"
                />

                <div>
                    <h3 className="font-medium text-dark-grayish-blue/80 line-clamp-1">
                        {name}
                    </h3>

                    <div className="flex gap-1.5">
                        <p className="flex gap-1 text-dark-grayish-blue/80">
                            ${price.toFixed(2)} <span>x {count}</span>
                        </p>
                        <p className="font-semibold">${(price * count).toFixed(2)}</p>
                    </div>
                </div>

                <button className="flex items-center justify-center w-6 h-6 text-dark-grayish-blue/70 cursor-pointer" onClick={() => onRemove(id)}>
                    <Icon name={"trash"} size={18} />
                </button>
            </div>
        );
    }
}
