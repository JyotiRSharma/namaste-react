import "../index.css";

const RestaurantCard = () => {
  const pizzaHut = {
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/caanzrjtgl3obhmbbfmb",
    heading: "Pizza Hut",
    cuisine: ["Pizzas", "Americano"],
    rating: 4
  }
  return (
    <div className="restaurant-card">
      <img src={pizzaHut.image} />
      <h1>{pizzaHut.heading}</h1>
      <h2>{pizzaHut.cuisine.join(", ")}</h2>
      <h3>{pizzaHut.rating} stars</h3>
    </div>
  )
};

export default RestaurantCard;