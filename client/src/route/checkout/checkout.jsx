import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import CheckoutItem from "../../components/checkOutItem/checkOutItem";
import "./checkoutStyles.css";
const CheckOut = () => {
  const { cartItems, cartCount, setComingFromCheckout, cartTotal } =
    useContext(CartContext);

  setComingFromCheckout(false);

  return (
    <section className="checkOutContainer">
      <h2>CHECKOUT</h2>
      <div className="parent">
        <div className="products">
          <span>Products</span>
        </div>
        <div className="description">
          <span>Description</span>
        </div>
        <div className="quantity">
          <span>Quantity</span>
        </div>
        <div className="price">
          <span>Price</span>
        </div>
        <div className="remove">
          <span>Remove</span>
        </div>
      </div>
      <div className="cartItems1">
        {cartCount === 0 ? (
          <p>No Cart Items yet</p>
        ) : (
          cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })
        )}
      </div>

      <span className="totalCheckout">TOTAL: ${cartTotal}</span>
    </section>
  );
};

export default CheckOut;

/*       <div className="checkoutHeader"></div> */
