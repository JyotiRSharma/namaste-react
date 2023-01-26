import React from "react";
import RestaurantList from "./RestaurantList";

const Body = () => {
  return (
    <>
      <input type="text" />
      <button type="submit">Search</button>
      <RestaurantList />
    </>
  );
};

export default Body;
