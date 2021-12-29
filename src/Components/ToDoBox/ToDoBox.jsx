import './ToDoBox.css';
import UncheckedToDo from '../UncheckedToDo/UncheckedToDo';
import CheckedToDo from '../CheckedToDo/CheckedToDo';

function ToDoBox({ title, itemList, onDelete }) {
	return (
		<section className="box-section">
			<h3> {title} </h3>
			<ul>
				{itemList.map((item) =>
					item.checked ? (
						<CheckedToDo key={item.id} item={item} onDelete={onDelete} />
					) : (
						<UncheckedToDo key={item.id}  item={item} onDelete={onDelete} />
					),
				)}
			</ul>
		</section>
	);
}

export default ToDoBox;
