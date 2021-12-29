import './UncheckedToDo.css';
import { RiPencilFill } from 'react-icons/ri';
import { FaTrash } from 'react-icons/fa';
//import { AiOutlineCheck } from 'react-icons/ai';

function UncheckedToDo({ text }) {
	return (
		<li className="list-item">
			<div className="item-left">
				<input className="check-input" type="checkbox" />
				{text}
			</div>
			<div className="item-rigth">
				<button className="list-icons-style">
					<RiPencilFill />
				</button>
				<button className="list-icons-style">
					<FaTrash />
				</button>
			</div>
		</li>
	);
}
export default UncheckedToDo;
