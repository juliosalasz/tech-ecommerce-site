import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";

const ProductCategory = () => {
  const params = useParams();
  const { products } = useContext(ProductContext);
  console.log(products);

  //   const filtering = products.map();

  const productInfo = `${products}.${params.id}`;
  console.log(productInfo);

  console.log(params);
  return (
    <div>
      <h1>This is the product Category</h1>
      <h2>{params.id}</h2>
    </div>
  );
};

export default ProductCategory;
