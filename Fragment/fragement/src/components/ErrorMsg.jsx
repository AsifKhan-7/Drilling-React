const ErrorMsg = ({ items }) => {
  return (
    <>
      {" "}
      {items.length === 0 && (
        <h3 className="text-center text-danger fw-bold">
          I'm still hungry. 😈
        </h3>
      )}
    </>
  );
};

export default ErrorMsg;
