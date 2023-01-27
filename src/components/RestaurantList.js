import RestaurantCard from "./RestaurantCard.js";
import { RESTAURANT_LIST_DATA } from "../../config.js";
import { useState } from "react";

const filterRestuarant = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) => {
    if(restaurant?.data?.name) {
      return restaurant.data.name.includes(searchText);
    }
  });
};

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST_DATA);

  console.log(restaurantList);
  return (
    <>
      <input
        type="text"
        className="search-text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setRestaurantList(filterRestuarant(searchText, restaurantList));
          if (searchText.length <= 1) {
            setRestaurantList(RESTAURANT_LIST_DATA);
          }
        }}
      />
      <button
        type="submit"
        onClick={() => {
          setRestaurantList(filterRestuarant(searchText, restaurantList));
        }}
      >
        Search
      </button>
      <div className="restaurant-list">
        {restaurantList.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.uuid} />;
        })}
      </div>
    </>
  );
};

export default RestaurantList;
