import Icon from "../../common/Icon";

export default function MobileNav({ isOpen, closeNav }) {
    return (
        <div
            className={`fixed top-0 bottom-0 ${
                isOpen ? "left-0" : "-left-60"
            } w-60 bg-white p-6 transition-all duration-150 z-50`}>
            <button
                onClick={closeNav}
                className="flex items-center justify-center w-8 h-8">
                <Icon name={"x"} size={24} />
            </button>

            <div className="flex flex-col gap-2 mt-7">
                <a href="#" className="font-bold text-xl py-2">
                    Collections
                </a>
                <a href="#" className="font-bold text-xl py-2">
                    Men
                </a>
                <a href="#" className="font-bold text-xl py-2">
                    Women
                </a>
                <a href="#" className="font-bold text-xl py-2">
                    About
                </a>
                <a href="#" className="font-bold text-xl py-2">
                    Contact
                </a>
            </div>
        </div>
    );
}
