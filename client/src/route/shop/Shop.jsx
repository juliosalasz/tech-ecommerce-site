import ShopCategoryBar from "../../components/shopCategoryBar/ShopCategoryBar";
import ShopCategoryDisplay from "../../components/shopCategoryDisplay/ShopCategoryDisplay";
import { Categories } from "../../utils/featuredList";
import "./shopStyles.css";

import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";

const Shop = () => {
  //remember to replace categories with products for the internal components
  const { products } = useContext(ProductContext);
  return (
    <section id="CategorySection" className="shopContainer">
      <div className="categoryContainer">
        <h2>CATEGORIES</h2>
        <div className="categoryDisplayContainer">
          <ShopCategoryBar categories={Categories} />
          <ShopCategoryDisplay categories={Categories} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
