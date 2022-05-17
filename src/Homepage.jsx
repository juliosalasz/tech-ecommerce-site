import Slider from "./components/slider/slider";

import { HomepageContainer } from "./HomepageStyles";

const Homepage = () => {
  return (
    <HomepageContainer>
      <h2>This is the Home page</h2>
      <h2>TECH YOURSELF</h2>
      <h3>Find what you need here</h3>
      <Slider />

      <button>Shop</button>
    </HomepageContainer>
  );
};

export default Homepage;
