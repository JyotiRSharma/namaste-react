import "../../index.css";
import { IMG_URL } from "../../config";

const RestaurantCard = ({uuid, name, cloudinaryImageId, cuisines, deliveryTime}) => {

  return (
    <div key={uuid} className="restaurant-card">
      <img src={IMG_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <p><b>{cuisines.join(", ")}</b></p>
      <p>{deliveryTime} minutes to reach</p>
    </div>
  )
};

export default RestaurantCard;