import React, { useState } from "react";
import Icon from "../../common/Icon";
import Cart from "./Cart";

export default function ShoppingCart({ items, onRemove }) {
    const [isOpen, setIsOpen] = useState(false);

    const totalCount = items.reduce((total, item) => total + item.count, 0);

    return (
        <div className="relative">
            <button
                className="relative flex items-center justify-center w-8 h-8 text-dark-grayish-blue hover:text-very-dark-blue transition-colors duration-150 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <Icon name="shopping-cart" size={24} />
                {totalCount > 0 && (
                    <span className="absolute -top-0.5 -right-1 flex items-center justify-center w-4.5 h-3.5 rounded-full bg-orange text-[10px] text-white">
                        {totalCount}
                    </span>
                )}
            </button>

            <Cart isOpen={isOpen} items={items} onRemove={onRemove} />
        </div>
    );
}
