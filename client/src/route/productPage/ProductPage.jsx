import { useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/productsContext";
import "./productPageStyles.css";

import { ListButtonToggle } from "./productPageStyles";

const ProductPage = () => {
  //state for tab
  const [skuState, setSkuState] = useState(0);

  //destructure for getting the product info
  const { products } = useContext(ProductContext);
  const location = useLocation();
  const categoryName = location.pathname.split("/");

  const [categoryPath] = products.filter(
    (category) => category.Category === categoryName[2]
  );

  const [productList] = categoryPath.PRODUCTS.filter(
    (product) => product.id === Number(categoryName[3])
  );
  const [price, setPrice] = useState(productList.skus[0].price);

  const priceHandler = (i) => {
    setSkuState(i);
    setPrice(productList.skus[i].price);
  };

  return (
    <section className="productPageWrapper">
      <div className="productPageContainer">
        <img
          src={`http://localhost:5000/${productList.imageUrl}`}
          alt={productList.name}
          className="productImage"
        />
        <div className="productInfo">
          <h2 className="productTitle">{productList.name.toUpperCase()}</h2>
          <h3 className="productBrand">{productList.brand.toUpperCase()}</h3>
          <div className="productStockPrice">
            <h3 className="productPrice">{price}</h3>
            <div className="stockContainer">
              {productList.skus[skuState].quantity !== 0 ? (
                <p className="stock">IN STOCK</p>
              ) : (
                <p className="noStock">Out of Stock</p>
              )}
            </div>
          </div>
          <div className="productDescription">
            <p>{productList.description}</p>
          </div>
          <ul className="skuList">
            {productList.skus.map((sku, i) => {
              return (
                <ListButtonToggle
                  active={skuState === i}
                  className="skuList"
                  key={sku.sku}
                  onClick={() => priceHandler(i)}
                >
                  {sku.feature}
                </ListButtonToggle>
              );
            })}
          </ul>

          <Button type="button" buttonType="cartButton">
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
// {productList.skus[skuState].quantity !== 0 ? (
//   <p>In Stock</p>
// ) : (
//   <p>Out of Stock</p>
// )}
