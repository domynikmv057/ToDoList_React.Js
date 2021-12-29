import './CheckedToDo.css';
import { FaTrash } from 'react-icons/fa';

function CheckedToDo({item, onDelete}) {
	return (
		<li className="list-item text-edit">
			<div className="item-left">
				<input className="check-input" type="checkbox" />
				{item && item.desc}
			</div>
			<div className="item-rigth">
				<button className="list-icons-style">
					<FaTrash />
				</button>
			</div>
		</li>
	);
}
export default CheckedToDo;
