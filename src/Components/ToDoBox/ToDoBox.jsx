import './ToDoBox.css';
import UncheckedToDo from '../UncheckedToDo/UncheckedToDo';
import CheckedToDo from '../CheckedToDo/CheckedToDo';

function ToDoBox({ title, itemList, onDelete, onChecked, onEditing }) {
	return (
		<section className="box-section">
			<h3> {title} </h3>
			<ul>
				{itemList.map((item) =>
					item.checked ? (
						<CheckedToDo
							key={item.id}
							onChecked={onChecked}
							item={item}
							onDelete={onDelete}
						/>
					) : (
						<UncheckedToDo
							key={item.id}
							onChecked={onChecked}
							item={item}
							onDelete={onDelete}
							onEditing={onEditing}
						/>
					),
				)}
			</ul>
		</section>
	);
}

export default ToDoBox;
