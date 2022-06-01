import { FeaturedList } from "../../../utils/featuredList";

import FeaturedMenuItems from "../../../components/featuredMenuItems/FeaturedMenuItems";
import Marquee from "react-fast-marquee";

import "./featuredItemsStyle.css";

const FeaturedItems = () => {
  return (
    <section className="featuredSection">
      <div className="featuredContent">
        <h2 className="title">POPULAR PRODUCTS</h2>
        <div className="featuredList">
          {FeaturedList.map((item) => (
            <FeaturedMenuItems key={item.id} item={item} />
          ))}
        </div>

        <h2>Brands Marquee</h2>
        <Marquee></Marquee>
      </div>
    </section>
  );
};

export default FeaturedItems;
