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
				Сохранить
			</Button>{' '}
		</div>
	)
}

export default ButtonAdd
