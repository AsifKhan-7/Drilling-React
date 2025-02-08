function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container ">
      <div className="row btn-layout">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
