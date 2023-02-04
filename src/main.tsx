import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { store } from "./store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route
					path="/*"
					element={<App />}
				/>
			</Routes>
		</BrowserRouter>
	</Provider>
)
