import styles from "../css-modules/Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // let { foodItem } = props;

  return (
    <li className={`${styles.item} list-group-item ${bought ? "active" : ""}`}>
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
