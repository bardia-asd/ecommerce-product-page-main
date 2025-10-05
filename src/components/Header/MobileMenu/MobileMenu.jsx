import React, { useState } from "react";
import Icon from "../../common/Icon";
import MobileNav from "./MobileNav";
import Overlay from "../../common/Overlay";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                className="flex items-center justify-center w-8 h-8"
                onClick={() => setIsOpen(true)}>
                <Icon name={"text-align-justify"} size={24} />
            </button>

            <MobileNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />

            <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
}
