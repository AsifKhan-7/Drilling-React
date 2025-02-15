import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item) => {
    let newFoodItems = [...activeItems, item];
    setActiveItems(newFoodItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          bought={activeItems.includes(item)}
          foodItem={item}
          handleBuyButton={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
