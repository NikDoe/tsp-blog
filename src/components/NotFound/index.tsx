import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<main>
			<h2>404 Page Not Found</h2>
			<p>
				<Link to="/">To Homepage</Link>
			</p>
		</main>
	)
}

export default NotFound
