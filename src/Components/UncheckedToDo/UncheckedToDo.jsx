import './UncheckedToDo.css';
import { RiPencilFill } from 'react-icons/ri';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

function UncheckedToDo({ item, onDelete, onChecked, onEditing }) {
	let [isEditing, setIsEditing] = useState(false);
	let [editToDo, setEditToDo] = useState([]);

	return (
		<li className="list-item">
			<div className="item-left">
				<input
					className="check-input"
					type="checkbox"
					value={item.checked}
					onChange={() => onChecked(item)}
				/>
				{isEditing ? (
					<input
						className="editInput"
						type="text"
						value={editToDo}
						onChange={(valChange) => setEditToDo(valChange.target.value)}
					/>
				) : (
					item && item.desc
				)}
			</div>
			<div className="item-rigth">
				{isEditing ? (
					<button
						className="list-icons-style"
						onClick={() => {
							onEditing(item, editToDo);
							setEditToDo('');
							setIsEditing(false);
						}}
					>
						<AiOutlineCheck />
					</button>
				) : (
					<button
						className="list-icons-style"
						onClick={() => {
							setIsEditing(true);
							setEditToDo(item.desc);
						}}
					>
						<RiPencilFill />
					</button>
				)}
				<button
					className="list-icons-style"
					onClick={() => {
						onDelete(item.id);
					}}
				>
					<FaTrash />
				</button>
			</div>
		</li>
	);
}
export default UncheckedToDo;
