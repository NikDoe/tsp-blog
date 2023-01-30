import { Dispatch, FC } from "react"
import NavLinks from "../NavLinks"
import Search from "../Search"

interface INavProps {
	search: string
	setSearch: Dispatch<React.SetStateAction<string>>
}

const Nav: FC<INavProps> = ({ search, setSearch }) => {
	return (
		<nav>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<NavLinks />
		</nav>
	)
}

export default Nav
