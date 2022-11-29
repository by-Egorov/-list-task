import React from 'react'

const Form = ({ value, setValue, addTask }) => {
	return (
		<div className='card bg-light'>
			<div className='card-header text-center'>Добавить новую задачу</div>
			<form id='form'>
				<div class='form-group'>
					<input
						type='text'
						class='form-control inputTask'
						placeholder='Текст задачи'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						required
					/>
				</div>
				<div class='input-group-append'>
					<button
						className='btn btn-outline-success btn-add m-2'
						type='button'
						onClick={() => {
							addTask()
						}}
					>
						Сохранить
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
