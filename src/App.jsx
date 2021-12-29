import React from 'react';
import { useEffect, useState } from 'react';
import './styles.css';
import ToDoBox from './Components/ToDoBox/ToDoBox';
import { v4 } from 'uuid';
import NavBar from './Components/NavBar/NavBar';

function App() {
	let [toDoList, setToDoList] = useState([]);
	let [novoToDo, setNovoToDo] = useState('');

	function addToDoItem(text) {
		setToDoList([
			...toDoList,
			{
				id: v4(),
				desc: text,
				checked: false,
			},
		]);
		setNovoToDo('');
	}

	function deleteToDoItem(id) {
		setToDoList(toDoList.filter((item) => item.id !== id));
	}

	function checkItem(item) {
		setToDoList([
			...toDoList.filter((i) => i !== item),
			{ ...item, checked: !item.checked },
		]);
	}

	function attToDoDesc(item, editToDo) {
		setToDoList([
			...toDoList.filter((i) => i !== item),
			{ ...item, desc: editToDo },
		]);
	}

	useEffect(() => {
		const localStorageRepo = localStorage.getItem('toDoList');
		if (localStorageRepo) {
			setToDoList(JSON.parse(localStorageRepo));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('toDoList', JSON.stringify(toDoList));
	}, [toDoList]);

	return (
		<>
			<NavBar />
			<main>
				<div className="addTasck">
					<input
						value={novoToDo}
						onChange={(valChange) => setNovoToDo(valChange.target.value)}
						type="text"
						placeholder="Digite aqui uma nova tarefa..."
					/>
					<button onClick={() => addToDoItem(novoToDo)}>ADICIONAR</button>
				</div>
				<ToDoBox
					onChecked={checkItem}
					onDelete={deleteToDoItem}
					onEditing={attToDoDesc}
					title="A fazer"
					itemList={toDoList.filter((item) => !item.checked)}
				/>

				<ToDoBox
					onChecked={checkItem}
					onDelete={deleteToDoItem}
					onEditing={attToDoDesc}
					title="Feito"
					itemList={toDoList.filter((item) => item.checked)}
				/>
			</main>
		</>
	);
}

export default App;
