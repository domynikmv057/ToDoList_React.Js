import './UncheckedToDo.css';
import { RiPencilFill } from 'react-icons/ri';
import { FaTrash } from 'react-icons/fa';
//import { AiOutlineCheck } from 'react-icons/ai';

function UncheckedToDo({ item, onDelete, onChecked }) {
	return (
		<li className="list-item">
			<div className="item-left">
				<input
					className="check-input"
					type="checkbox"
					value={item.checked}
					onChange={() => onChecked(item)}
				/>
				{item && item.desc}
			</div>
			<div className="item-rigth">
				<button className="list-icons-style">
					<RiPencilFill />
				</button>
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
