import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="bg-gray-100 p-3">
			<ul className="flex gap-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/tribes">Tribes</Link>
				</li>
			</ul>
		</nav>
	);
}
