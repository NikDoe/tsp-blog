import ReactDOM from "react-dom/client"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { DataProvider } from "./context/DataContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<DataProvider>
		<BrowserRouter>
			<Routes>
				<Route
					path="/*"
					element={<App />}
				/>
			</Routes>
		</BrowserRouter>
	</DataProvider>
)
