import React, { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { PiTrashLight } from "react-icons/pi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { Total, Cart, clearCart, ItemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white mt-[6.2vw] opacity-100 text-black fixed top-0 h-full md:w-[35vw] shadow-2xl z-[999] transition-all duration-300 px-4 xl:max-w-[30vw] lg:px-[35px]`}
    >
      {/* Sidebar Header */}
      <div className="font-('Neue_Montreal') text-2xl font-light mt-10">
        Shopping bag ({ItemAmount})
      </div>
      <div
        onClick={handleClose}
        className="absolute top-8 right-4 text-2xl px-4 py-2 cursor-pointer"
      >
        <RxCross2 />
      </div>

      {/* Scrollable Cart Items */}
      <div
        className="overflow-y-auto max-h-[60vh] hover:scroll-auto scrollbar-light scrollbar-thumb-black"
      >
        {Cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      {/* Sidebar Footer */}
      <div>
        <div className="flex flex-col py-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold ml-4 uppercase">Total: {parseFloat (Total).toFixed(2)}</span>
            <div
              onClick={() => clearCart()}
              className="cursor-pointer py-4 text-[1.5vw]"
            >
              <PiTrashLight />
            </div>
          </div>
          <Link to={"/viewcart"}>
          <button className="w-auto h-auto text-white bg-zinc-900 p-3">View Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
