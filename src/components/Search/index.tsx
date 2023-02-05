import { ChangeEvent, FC, FormEvent, useState } from "react"
import { useActions, useTypedSelector } from "../../hooks"
const Search: FC = () => {
	const { search } = useTypedSelector(state => state.posts)
	const { setSearch } = useActions()

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
