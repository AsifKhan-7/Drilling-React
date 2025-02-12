import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => {
            alert(`${item} being bought.`);
          }}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
