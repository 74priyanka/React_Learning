import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  }, []);

  const fetchMenu = async () => {
    const data = await fetch();

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwo}</h3>
      <div className="menu-items">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
