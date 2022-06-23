import Button from "../button/Button";

const ItemCard = (props) => {
  return (
    <div id={props.id}>
      <img src="#" alt="#" />
      <h3>{props.brand}</h3>
      <h2>{props.title}</h2>
      <Button type="button" buttonType="cartButton">
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemCard;
