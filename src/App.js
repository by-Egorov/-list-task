import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import uuid from 'react-uuid'

function App() {
	const [value, setValue] = useState('');
	const [todo, setTodo] = useState(
		JSON.parse(localStorage.getItem("todo")) || []
	 );
  
	 useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(todo));
	 }, [todo]);
	function addTask() {
		setTodo([...todo,
			{
				id: uuid(),
				title: value,
				done: false
			}
		])
		setValue('')
	}
	return (
		<div className="container">
			<Header />
			<List todo={todo} setTodo={setTodo} />
			<Form value={value} setValue={setValue} addTask={addTask} />
		</div>
	);
}

export default App;
