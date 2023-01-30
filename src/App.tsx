import { Routes, Route } from "react-router-dom"
import { About, Home, Layout, NewPost, NotFound, PostPage } from "./components"

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route path="post">
					<Route
						index
						element={<NewPost />}
					/>
					<Route
						path=":id"
						element={<PostPage />}
					/>
				</Route>
				<Route
					path="about"
					element={<About />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	)
}

export default App
