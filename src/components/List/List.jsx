import React from 'react'
import { ListGroup } from 'react-bootstrap'

const List = ({ todo, setTodo }) => {
	function deleteTask(id) {
		let newTodo = [...todo].filter((item) => item.id !== id)
		setTodo(newTodo)
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

	return (
		<div className='card mb-4'>
			<ListGroup>
				{todo.map((item) => (
					<ListGroup.Item
						key={item.id}
						className={item.status ? 'close item-list' : 'item-list'}
					>
						<span>{item.title}</span>
						<div className='task-item__buttons'>
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
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	)
}

export default List
