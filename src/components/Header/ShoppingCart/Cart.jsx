import React, { Component } from "react";
import CartItem from "./CartItem";

export default function Cart({ isOpen, items, onRemove }) {
    return (
        isOpen && (
            <div className="fixed top-20 right-0 left-0 px-2 pt-2 sm:absolute sm:top-full sm:left-auto sm:right-0 sm:pt-5 z-10">
                <div className=" w-full sm:w-86 bg-white rounded-md shadow-md divide-y divide-grayish-blue/30">
                    <div className="p-4">
                        <h3 className="font-medium">Cart</h3>
                    </div>

                    <div className="h-40 p-4">
                        {items.length > 0 ? (
                            <div className="flex flex-col gap-4 h-full overflow-y-auto">
                                <div className="flex flex-col gap-2">
                                    {items.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            onRemove={onRemove}
                                            {...item}
                                        />
                                    ))}
                                </div>

                                <button className="shrink-0 h-11 bg-orange rounded-md font-semibold mt-auto">
                                    Checkout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <p className="font-semibold text-dark-grayish-blue">
                                    Your cart is empty
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    );
}
