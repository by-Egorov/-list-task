import React from 'react'
import Button from 'react-bootstrap/Button'

const ButtonAdd = ({ addTask }) => {
	return (
		<div>
			<Button
				variant='outline-success'
				className='btn-add'
				onClick={() => {
					addTask()
				}}
			>
				Добавить
			</Button>{' '}
		</div>
	)
}

export default ButtonAdd
