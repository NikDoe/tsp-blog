import { Link } from "react-router-dom"

const NavLinks = () => {
	return (
		<ul className="nav-links">
			<li className="link">
				<Link to="/">Home</Link>
			</li>
			<li className="link">
				<Link to="post">Post</Link>
			</li>
			<li className="link">
				<Link to="about">About</Link>
			</li>
		</ul>
	)
}

export default NavLinks
