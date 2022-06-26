import { useEffect } from "react";
import { createContext, useState } from "react";

//will take current cart Items and the new product and check if already exsists
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains product To add, returns true if theres a match
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );

  //if for adding 1 quantity if theresa match
  if (existingCartItem) {
    //check all items
    return cartItems.map((cartItem) =>
      //if the id migth be a match
      cartItem.id === productToAdd.id
        ? //if it is add +1 to quantity
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : //if not just return the item
          cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  //for opening the modal
  setCartIsOpen: () => {},
  cartIsOpen: false,
  //for adding new items
  cartItems: [],
  addItemToCart: () => {},
  //for counting Cart
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //for counting and reducing items items
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    //will add the cartItem from helper funcion to the cart state
    setCartItem(addCartItem(cartItems, productToAdd));
  };
  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
