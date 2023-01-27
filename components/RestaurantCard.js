import "../index.css";
import { IMG_URL } from "../utils";

const RestaurantCard = ({uuid, name, cloudinaryImageId, cuisines, deliveryTime}) => {

  return (
    <div key={uuid} className="restaurant-card">
      <img src={IMG_URL+cloudinaryImageId} />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{deliveryTime} minutes to reach</h3>
    </div>
  )
};

export default RestaurantCard;