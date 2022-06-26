import "./cartItemStyles.css";

const CartItem = ({ cartItem }) => {
  const { name, quantity, feature } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>/<span>{feature}</span>
    </div>
  );
};
export default CartItem;
