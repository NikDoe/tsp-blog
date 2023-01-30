import { Dispatch, FC } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import Nav from "../Nav"

interface ILayoutProps {
	search: string
	setSearch: Dispatch<React.SetStateAction<string>>
}

const Layout: FC<ILayoutProps> = ({ search, setSearch }) => {
	return (
		<div className="App">
			<Header title="BLOG TITLE" />
			<Nav
				search={search}
				setSearch={setSearch}
			/>
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
