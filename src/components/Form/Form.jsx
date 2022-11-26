import React from "react";

const Form = ({value, setValue, addTask}) => {

  return (
    <div className="card bg-light">
      <div className="card-header">Добавить новую задачу</div>
      <div className="card-body">
        <form id="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="taskInput"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Текст задачи"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary  btn-lg active btn btn-info btn-add"
				onClick={() => {
					addTask()
				}}
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
