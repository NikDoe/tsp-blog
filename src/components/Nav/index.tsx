import { FC } from "react"
import NavLinks from "../NavLinks"
import Search from "../Search"

const Nav: FC = () => {
	return (
		<nav>
			<Search />
			<NavLinks />
		</nav>
	)
}

export default Nav
