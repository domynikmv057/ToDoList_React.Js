import React from 'react';
import { useEffect, useState } from 'react';
import './stles.css';
import logEmix from './imagens/logoEmix.png';
import ToDoBox from './Components/ToDoBox/ToDoBox';
import { v4 } from 'uuid';

function App() {
	let [toDoList, setToDoList] = useState([]);
	let [novoToDo, setNovoToDo] = useState('');
	let [editToDo, setEditToDo] = useState([]);


	function editToDos(index, item) {
		setEditToDo(item);
		let toDoListTemp = [...toDoList];
		let tempToDo = item;
		tempToDo.isEdit = true;
		toDoListTemp.splice(index, 1, tempToDo);
		setToDoList(toDoListTemp);
	}

	function salvarToDo(index, item) {
		let toDoListTemp = [...toDoList];
		let tempToDo = item;
		tempToDo.desc = editToDo;
		tempToDo.isEdit = false;
		toDoListTemp.splice(index, 1, tempToDo);
		setToDoList(toDoListTemp);
	}

	function addToDoItem(text) {
		setToDoList([
			...toDoList,
			{
				id: v4(),
				desc: text,
				checked: false,
				isEdit: false,
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
			<nav>
				<div>
					<p>
						<span>TODO</span> LIST
					</p>
				</div>
				<div>
					<img src={logEmix} alt="logo" width="140px" />
				</div>
			</nav>
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
					title="A fazer"
					itemList={toDoList.filter((item) => !item.checked)}
				/>

				<ToDoBox
					onChecked={checkItem}
					onDelete={deleteToDoItem}
					title="Feito"
					itemList={toDoList.filter((item) => item.checked)}
				/>
			</main>
		</>
	);
}

export default App;
