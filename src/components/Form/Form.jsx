import React from 'react';

const Form = () => {
    return (
        <div className="card bg-light">
            <div className="card-header">Добавить новую задачу</div>
            <div className="card-body">
                <form id="form">
                    <div className="form-group">
                        <input type="text" className="form-control" id="taskInput" placeholder="Текст задачи" required/>
                    </div>
                    <button type="submit" className="btn btn-primary  btn-lg active btn btn-info btn-add">Добавить
                    </button>
                </form>
                <button id="checkedAll" className="btn mt-4 float-right btn-outline-success checkedAllTask">Выполнить
                    все
                </button>
                <button id="removeDoneTasks" className="btn mt-4 float-right btn-outline-secondary removeDone">Удалить
                    выполненные
                    задачи
                </button>
            </div>
        </div>
    );
};

export default Form;
