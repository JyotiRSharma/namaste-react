import RestaurantCard from "./RestaurantCard.js";
import { RESTAURANT_LIST_DATA } from "../../config.js";
import { useState } from "react";

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [buttonStatus, setButtonStatus] = useState("false");
  return (
    <>
      <input
        type="text"
        className="search-text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button type="submit" onClick={() => {
        buttonStatus === "false" ? setButtonStatus("true") : setButtonStatus("false");
      }}>{buttonStatus}</button>
      <div className="restaurant-list">
        {RESTAURANT_LIST_DATA.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.uuid} />;
        })}
      </div>
    </>

  );
};

export default RestaurantList;
