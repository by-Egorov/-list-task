import React from 'react'

const Form = ({ value, setValue, addTask }) => {
	return (
		<div className='card bg-light'>
			<div className='card-header text-center'>Добавить новую задачу</div>
			<div class='input-group mb-3 p-4'>
				<input
					type='text'
					className='form-control'
					placeholder='Текст задачи'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<div class='input-group-append'>
					<button
						className='btn btn-outline-success'
						type='button'
						onClick={() => {
							addTask()
						}}
					>
						Сохранить
					</button>
				</div>
			</div>
		</div>
	)
}

export default Form
