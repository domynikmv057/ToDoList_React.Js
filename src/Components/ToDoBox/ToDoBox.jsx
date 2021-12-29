import './ToDoBox.css';

function ToDoBox ({title, itemList}) {

    return(
        <section className='box-section'>
            <h3> {title} </h3>
            <ul>
                {itemList.map(item => <li> {item.desc} </li>)}
            </ul>
        </section>
    )
}

export default ToDoBox;