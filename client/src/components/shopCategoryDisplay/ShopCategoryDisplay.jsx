import "./shopCategoryDisplay.css";

const ShopCategoryDisplay = ({ categories }) => {
  return (
    <div className="displayContainer">
      <ul className="displayList">
        {categories
          .filter((category) => category.popular)
          .map((popularCategory) => {
            return (
              <li key={popularCategory.id}>
                <div className="displayInterior">
                  <h2>{popularCategory.name}</h2>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ShopCategoryDisplay;
