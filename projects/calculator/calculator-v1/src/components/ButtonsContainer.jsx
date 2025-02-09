import styles from "../css-modules/ButtonsContainer.module.css";

const ButtonsContainer = ({}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["buttons-container"]}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={styles.button}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
