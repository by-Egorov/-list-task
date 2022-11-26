import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import uuid from 'react-uuid'
import { Container } from "react-bootstrap";

function App() {
	const [value, setValue] = useState('');
	const [todo, setTodo] = useState(
		JSON.parse(localStorage.getItem("todo")) || []
	 );
  
	 useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(todo));
	 }, [todo]);
	function addTask() {
		if (value !== '') {
			setTodo([...todo,
				{
					id: uuid(),
					title: value,
					status: false
				}
			])
		} else {
			alert('Введите текст задачи')
		}
		setValue('')
	}
	return (
		<Container>
			<Header />
			<List todo={todo} setTodo={setTodo} />
			<Form value={value} setValue={setValue} addTask={addTask} />
		</Container>
	);
}

export default App;
