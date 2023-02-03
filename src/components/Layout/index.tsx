import { FC } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import Nav from "../Nav"

const Layout: FC = () => {
	return (
		<div className="App">
			<Header title="BLOG TITLE" />
			<Nav />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
