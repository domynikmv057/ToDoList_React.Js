import './UncheckedToDo.css';

function UncheckedToDo({ text }) {
	return (
		<li className="list-item">
			<div className='item-left'>
				<input className="check-input" type="checkbox" />
				{text}
			</div>
			<div className='item-rigth'>
				<button>aa</button>
				<button>aa</button>
			</div>
		</li>
	);
}
export default UncheckedToDo;
