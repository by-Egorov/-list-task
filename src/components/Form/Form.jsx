import React from 'react'
import ButtonAdd from './Button/Button'

const Form = ({ value, setValue, addTask }) => {
	return (
		<div className='card bg-light'>
			<div className='card-header'>Добавить новую задачу</div>
			<div className='card-body'>
				<form id='form'>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							value={value}
							onChange={(e) => setValue(e.target.value)}
							placeholder='Текст задачи'
							required
						/>
					</div>
					<ButtonAdd addTask={addTask} />
				</form>
			</div>
		</div>
	)
}

export default Form
