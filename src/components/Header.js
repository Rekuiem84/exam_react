import logo from "../images/jolly-roger.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="logo-cont">
				<img src={logo} alt="drapeau de l'équipage" />
			</div>
			<nav>
				<ul className="nav--links-cont">
					<li>
						<Link to="/">Articles</Link>
					</li>
					<li>
						<Link to="/Exos">Exos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default Header;
