import './ToDoBox.css';
import UncheckedToDo from '../UncheckedToDo/UncheckedToDo';
import CheckedToDo from '../CheckedToDo/CheckedToDo';

function ToDoBox({ title, itemList }) {
	return (
		<section className="box-section">
			<h3> {title} </h3>
			<ul>
				{itemList.map((item) =>
					item.checked ? (
						<CheckedToDo text={item.desc} />
					) : (
						<UncheckedToDo text={item.desc} />
					),
				)}
			</ul>
		</section>
	);
}

export default ToDoBox;
