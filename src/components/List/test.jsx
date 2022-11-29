<div className='card mb-4 rounded-3'>
			<ListGroup>
				{todo.map((item) => (
					<ListGroup.Item
						key={item.id}
						className={item.status ? 'close item-list' : 'item-list'}
					>
						<span>{item.title}</span>
						<div className='task-item__buttons'>
						<span className='date'>({item.data})</span>
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