import './CheckedToDo.css';
import { FaTrash } from 'react-icons/fa';

function CheckedToDo({text}) {
	return (
		<li className="list-item text-edit">
			<div className="item-left">
				<input className="check-input" type="checkbox" />
				{text}
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
