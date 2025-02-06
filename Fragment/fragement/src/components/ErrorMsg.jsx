const ErrorMsg = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <h3 className="text-center my-3 fw-bolder">I'm still hungry.</h3>
      )}
      ;
    </>
  );
};

export default ErrorMsg;
