import "./cartModalStyles.css";
import { useContext } from "react";
import { useTransition, animated } from "react-spring";
import { CartContext } from "../../context/cartContext";
import Button from "../button/Button";
import CartItem from "../cartItem/cartItem";

const CartModal = () => {
  const { cartIsOpen, setCartIsOpen, cartItems } = useContext(CartContext);
  const closeCart = () => {
    setCartIsOpen(!cartIsOpen);
  };
  const transitions = useTransition(cartIsOpen, {
    expires: 0,
    from: { opacity: 0, transform: "translateX(40px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(40px)" },
    reverse: cartIsOpen,
    delay: 200,
  });
  return (
    <div className="cartModalWrapper">
      <div className="cartBackDrop" onClick={closeCart}></div>
      {transitions((props, item) => {
        return (
          item && (
            <animated.div style={props} className="cartModalContainer">
              <h1>Cart Modal</h1>
              <div className="cartItems">
                {cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
              </div>

              <Button onClick={closeCart}>Close Cart</Button>
            </animated.div>
          )
        );
      })}
    </div>
  );
};

export default CartModal;
