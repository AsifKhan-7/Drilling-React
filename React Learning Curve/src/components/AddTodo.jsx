function AddTodo() {
  return (
    <div className="container text-center">
      <div class="row btn-layout">
        <div class="col-6">
          <input type="text" placeholder="Input Todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
