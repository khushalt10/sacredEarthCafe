import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  // const userLoggedIn = localStorage.getItem("user");
  const [cart, setCart] = useState([]);

  // MANAGER ->0 , ADMIN->1 STORE=>2

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
