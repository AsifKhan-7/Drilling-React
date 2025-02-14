const FoodInput = ({ handleOnKeydown }) => {
  return (
    <input
      type="text"
      className="form-control my-2"
      placeholder="Search food item..."
      onKeyDown={handleOnKeydown}
    />
  );
};

export default FoodInput;
