function CurrentTime() {
  let currentDateAndTime = new Date();
  return (
    <p className="lead">
      This is the current time: {currentDateAndTime.toLocaleTimeString()} -{" "}
      {currentDateAndTime.toLocaleDateString()}
    </p>
  );
}

export default CurrentTime;
