import "./cartModalStyles.css";
import { useContext } from "react";
import { useTransition, animated } from "react-spring";
import { CartContext } from "../../context/cartContext";
import Button from "../button/Button";
import CartItem from "../cartItem/cartItem";

const CartModal = () => {
  const { cartIsOpen, setCartIsOpen, cartItems, cartCount } =
    useContext(CartContext);
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
              <div className="cartTitle">
                <h1>MY CART</h1>
              </div>
              <div className="cartItems">
                {cartCount === 0 ? (
                  <p>No Cart Items yet</p>
                ) : (
                  cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                  ))
                )}
              </div>
              <div className="cartBtn">
                <Button onClick={closeCart}>Close Cart</Button>
              </div>
            </animated.div>
          )
        );
      })}
    </div>
  );
};

export default CartModal;
