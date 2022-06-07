import "./shopCategoryBar.css";

const ShopCategoryBar = ({ categories }) => {
  return (
    <div className="categoryBarContainer">
      <ul className="categoryBarList">
        {categories.map((category) => {
          return (
            <li key={category.id} className="categoryListEntry">
              <h2>{category.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopCategoryBar;
