import { ChangeEvent, FC, FormEvent, useState } from "react"
const Search: FC = () => {
	const [search, setSearch] = useState<string>("")

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
