import Button from "../button/Button";

const ItemCard = (props) => {
  return (
    <div id={props.id}>
      <img src={`http://localhost:5000/${props.imageUrl}`} alt={props.name} />
      <h3>{props.brand}</h3>
      <h2>{props.name}</h2>
      <Button type="button" buttonType="cartButton">
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemCard;
