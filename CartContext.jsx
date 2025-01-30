import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [ItemAmount, setItemAmount] = useState(0);
  const [Total, setTotal] = useState(0);
  useEffect(() => {
    const Total = Cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(Total);
  });

  useEffect(() => {
    if (Cart) {
      const amount = Cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [Cart]);

  // Add product to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = Cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = Cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...Cart, newItem]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const newCart = Cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount of a product in the cart
  const increaseAmount = (id) => {
    const cartItem = Cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = Cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    }
  };

  // Decrease amount of a product in the cart
  const decreaseAmount = (id) => {
    const cartItem = Cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = Cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
        );
        setCart(newCart);
      } else {
        removeFromCart(id); // Remove item if amount reaches 1
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        Cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        ItemAmount,
        Total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
