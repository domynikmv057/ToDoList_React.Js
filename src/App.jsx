import React from 'react';
import { useEffect, useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import './stles.css';
import logEmix from './imagens/logoEmix.png';
import ToDoBox from './Components/ToDoBox/ToDoBox';



function App() {
	let [toDoLista, setToDoLista] = useState([]);
	let [novoToDo, setNovoToDo] = useState('');
	let [editToDo, setEditToDo] = useState([]);

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
        <ToDoBox title="A fazer" itemList={toDoLista} />
				<div className="addTasck">
					<input
						value={novoToDo}
						onChange={(valChange) => setNovoToDo(valChange.target.value)}
						type="text"
						placeholder="Digite aqui uma nova tarefa..."
					/>
					<button onClick={() => addItenToDo()}>ADICIONAR</button>
				</div>
				<div className="tasksContainer">
					<h3> A fazer </h3>
					<ul className="toDoS">
						{toDoLista.map((item, index) => {
							if (item.checked === false) {
								return (
									<li key={item.id}>
										<div className="liStyle list_icons_style">
											<div className="inputTasks">
												<input
													className="checkStyle"
													type="checkbox"
													onChange={(event) => toDoChecked(index, event, item)}
													checked={item.checked}
												/>
												{item.isEdit ? (
													<input
														className="editingIput"
														value={editToDo.desc}
														onChange={(valChange) =>
															setEditToDo(valChange.target.value)
														}
													></input>
												) : (
													<span>{item.desc}</span>
												)}
											</div>
											<div className="buttonTasks">
												{item.isEdit ? (
													<button onClick={() => salvarToDo(index, item)}>
														<AiOutlineCheck />
													</button>
												) : (
													<button onClick={() => editToDos(index, item)}>
														<RiPencilFill />
													</button>
												)}
												<button onClick={() => deletarToDos(index)}>
													<FaTrash />
												</button>
											</div>
										</div>
									</li>
								);
							}
						})}
					</ul>
				</div>

				<div className="tasksContainer">
					<h3> Feito</h3>
					<ul>
						{toDoLista.map((item, index) => {
							if (item.checked === true) {
								return (
									<li key={item.id}>
										<div className="liStyle list_icons_style completTask">
											<input
												className="checkStyle"
												type="checkbox"
												onChange={(event) => toDoChecked(index, event, item)}
												checked={item.checked}
											/>
											<span>{item.desc}</span>
											<button onClick={() => deletarToDos(index)}>
												<FaTrash />
											</button>
										</div>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</main>
		</>
	);

	function addItenToDo(index) {
		let corpoToDo = {
			id: idAleatorio(),
			desc: novoToDo,
			checked: false,
			isEdit: false,
		};
		setToDoLista([...toDoLista, corpoToDo]);
		setNovoToDo('');
	}

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

	function idAleatorio() {
		const min = 1;
		const max = 999;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

export default App;
