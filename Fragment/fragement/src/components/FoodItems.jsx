const FoodItems = () => {
  let healthyFoodItems = ["Oats", "Salad", "Green Vegetables"];

  return (
    <ul className="list-group">
      {healthyFoodItems.map((item) => (
        <li key={item} className="list-group-item text-center text-uppercase">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
