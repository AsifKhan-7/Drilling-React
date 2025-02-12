const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      className="form-control my-2"
      placeholder="Search food item..."
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
