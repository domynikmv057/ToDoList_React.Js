import React from 'react';
import { useEffect, useState } from 'react';
import './stles.css';
import logEmix from './imagens/logoEmix.png';
import ToDoBox from './Components/ToDoBox/ToDoBox';
import { v4 } from 'uuid';

function App() {
	let [toDoLista, setToDoLista] = useState([]);
	let [novoToDo, setNovoToDo] = useState('');
	let [editToDo, setEditToDo] = useState([]);



	function toDoChecked(index, event, item) {
		let toDoListTemp = [...toDoLista];
		let tempToDo = item;
		tempToDo.checked = event.target.checked;
		toDoListTemp.splice(index, 1, tempToDo);
		setToDoLista(toDoListTemp);
	}

	function editToDos(index, item) {
		setEditToDo(item);
		let toDoListTemp = [...toDoLista];
		let tempToDo = item;
		tempToDo.isEdit = true;
		toDoListTemp.splice(index, 1, tempToDo);
		setToDoLista(toDoListTemp);
	}

	function salvarToDo(index, item) {
		let toDoListTemp = [...toDoLista];
		let tempToDo = item;
		tempToDo.desc = editToDo;
		tempToDo.isEdit = false;
		toDoListTemp.splice(index, 1, tempToDo);
		setToDoLista(toDoListTemp);
	}

	function deletarToDos(index) {
		let toDoListTemp = [...toDoLista];
		toDoListTemp.splice(index, 1);
		setToDoLista(toDoListTemp);
	}


	function addToDoItem (text) {
		setToDoLista([...toDoLista, {
			id: v4(),
			desc: text ,
			checked: false,
			isEdit: false
		}])
		setNovoToDo("")
	}

	function deleteToDoItem (id){
		let a = toDoLista.filter(item => item.id !== id)
		console.log(a);
	}

	useEffect(() => {
		const localStorageRepo = localStorage.getItem('toDoLista');
		if (localStorageRepo) {
			setToDoLista(JSON.parse(localStorageRepo));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('toDoLista', JSON.stringify(toDoLista));
	}, [toDoLista]);



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
				<ToDoBox title="A fazer" itemList={toDoLista.filter(item => !item.checked)} />

				<ToDoBox title="Feito" itemList={toDoLista.filter(item => item.checked) } />

			</main>
		</>
	);
}

export default App;
