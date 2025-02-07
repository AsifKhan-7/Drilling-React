import styles from "../css-modules/Item.module.css";

const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  return <li className={`${styles.item} list-group-item`}>{foodItem}</li>;
};
export default Item;
