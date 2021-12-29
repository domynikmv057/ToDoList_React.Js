import './NavBar.css';
import logEmix from '../../imagens/logoEmix.png';

function NavBar() {
	return (
		<nav>
			<div>
				<p>
					<span>TODO</span> LIST
				</p>
			</div>
			<div>
				<img src={logEmix} alt="logo" width="140px" />
			</div>
		</nav>
	);
}
export default NavBar;
