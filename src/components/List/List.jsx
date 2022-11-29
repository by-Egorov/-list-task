import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'

const List = ({ todo, setTodo }) => {
	const [edit, setEdit] = useState(null)
	const [value, setValue] = useState('')

	function deleteTask(id) {
		if (window.confirm('Удалить задачу?') === true) {
			let newTodo = [...todo].filter((item) => item.id !== id)
			setTodo(newTodo)
		}
		return
	}
	function statusTodo(id) {
		let newTodo = [...todo].filter((item) => {
			if (item.id === id) {
				item.status = !item.status
			}
			return item
		})
		setTodo(newTodo)
	}
	function editTodo(id, title) {
		setEdit(id)
		setValue(title)
	}
	function saveTodo(id) {
		let newTodo = [...todo].map(item => {
			if (item.id === id) {
				item.title = value
			}
			return item
		})
		setTodo(newTodo)
		setEdit(null)
	}

	return (
		<div className='card mb-4 rounded-3'>
			{
				<ListGroup>
					{todo.map((item) => (
						<ListGroup.Item
							key={item.id}
							className={item.status ? 'close item-list' : 'item-list'}
						>
							{edit === item.id ? (
								<div className='task'>
									<input
										className='inputSave'
										value={value}
										onChange={(e) => setValue(e.target.value)}
									/>
									<button 
									data-action='edit' 
									className='btn-action'
									onClick={() => saveTodo(item.id)} 
									>
										<i class='fa-regular fa-floppy-disk'></i>
									</button>
								</div>
							) : (
								<div className='task'>
									<span>{item.title}</span>
									<div className='task-item__buttons'>
										<span className='date'>({item.data})</span>
										<button
											type='button'
											data-action='edit'
											className='btn-action'
											onClick={() => editTodo(item.id, item.title)}
										>
											<i class='fa-regular fa-pen-to-square'></i>
										</button>
										<button
											type='button'
											data-action='done'
											className='btn-action'
											onClick={() => statusTodo(item.id)}
										>
											<i class='fa-solid fa-check'></i>
										</button>
										<button
											type='button'
											data-action='delete'
											className='btn-action'
											onClick={() => deleteTask(item.id)}
										>
											<i className='fa-solid fa-delete-left'></i>
										</button>
									</div>
								</div>
							)}
						</ListGroup.Item>
					))}
				</ListGroup>
			}
		</div>
	)
}

export default List
