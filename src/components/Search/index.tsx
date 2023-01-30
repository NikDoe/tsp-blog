import { ChangeEvent, Dispatch, FC, FormEvent } from "react"

interface ISearchProps {
	search: string
	setSearch: Dispatch<React.SetStateAction<string>>
}

const Search: FC<ISearchProps> = ({ search, setSearch }) => {
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
