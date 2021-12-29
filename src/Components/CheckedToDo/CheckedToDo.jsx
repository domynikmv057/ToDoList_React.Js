import './CheckedToDo.css';
import { FaTrash } from 'react-icons/fa';

function CheckedToDo({ item, onDelete, onChecked }) {
	return (
		<li className="list-item text-edit">
			<div className="item-left">
				<input
					className="check-input"
					type="checkbox"
					value={item.checked}
					checked={item.checked}
					onChange={() => onChecked(item)}
				/>
				{item && item.desc}
			</div>
			<div className="item-rigth">
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
export default CheckedToDo;
