import React from "react";
import RestaurantList from "./RestaurantList";

const Body = () => {
  return (
    <>
      <input type="text" className="search-text" placeholder="Search" value="" />
      <button type="submit">Search</button>
      <RestaurantList />
    </>
  );
};

export default Body;
