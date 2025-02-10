import styles from "../css-modules/Item.module.css";

const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  const handleBuyButton = (event) => {
    console.log(event);
    alert(`${foodItem} being bought.`);
  };
  return (
    <li className={`${styles.item} list-group-item`}>
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButton(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
