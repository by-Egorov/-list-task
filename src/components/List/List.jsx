import React from "react";

const List = ({ todo, setTodo }) => {
	
	function deleteTask(id) {
		let newTodo = [...todo].filter(item => item.id != id)
		setTodo(newTodo)	
	}

  return (
    <div className="card mb-4">
      <ul id="tasksList" className="list-group list-group-flush">
          {todo.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between task-item">
                  <span>{item.title}</span>
                  <div className=" task-item__buttons">
                      <button
                          type=" button"
                          data-action=" done"
                          className="btn-action"
                      >
								<i class="fa-solid fa-check"></i>
							 </button>
                      <button
                          type=" button"
                          data-action=" delete"
                          className="btn-action"
								  onClick={() => deleteTask(item.id) }
                      >
                          <i className="fa-solid fa-delete-left"></i>
                      </button>
                  </div>
              </li>
          ))}
      </ul>
    </div>
  );
};

export default List;