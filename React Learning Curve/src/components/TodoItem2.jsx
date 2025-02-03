function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "03/02/2025";
  return (
    <div className="container">
      <div class="row btn-layout">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
