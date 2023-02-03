import { ChangeEvent, FC, FormEvent, useContext } from "react"
import DataContext from "../../context/DataContext"

const Search: FC = () => {
	const { search, setSearch } = useContext(DataContext)

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				placeholder="search post"
				value={search}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
			/>
		</form>
	)
}

export default Search
