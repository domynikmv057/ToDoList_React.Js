import './ToDoBox.css';
import UncheckedToDo from '../UncheckedToDo/UncheckedToDo';

function ToDoBox ({title, itemList}) {

    return(
        <section className='box-section'>
            <h3> {title} </h3>
            <ul>
                {itemList.map(item => <UncheckedToDo text={item.desc} />)}
            </ul>
        </section>
    )
}

export default ToDoBox;