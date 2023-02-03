import { createContext, FC, ReactElement, useEffect, useState } from "react"
import { api } from "../api/postsApi"
import { IPost, PostsContextType } from "../types"

const initContextState: PostsContextType = {
	posts: [],
	searchResult: [],
	setPosts: () => {},
	search: "",
	setSearch: () => {},
}

const DataContext = createContext<PostsContextType>(initContextState)

interface DataProviderProps {
	children: ReactElement | ReactElement[]
}

export const DataProvider: FC<DataProviderProps> = ({ children }): ReactElement => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [searchResult, setSearchResult] = useState<IPost[]>([])
	const [search, setSearch] = useState<string>("")

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await api.get<IPost[]>("posts")
				setPosts(response.data)
			} catch (error) {
				if (error instanceof Error) {
					console.log(error.message)
				} else {
					console.log("unexpected error")
				}
			}
		}

		fetchPosts()
	}, [])

	useEffect(() => {
		const result = posts
			.filter(
				post =>
					post.title.toLowerCase().includes(search.toLowerCase()) ||
					post.body.toLowerCase().includes(search.toLowerCase())
			)
			.reverse()

		setSearchResult(result)
	}, [posts, search])

	return (
		<DataContext.Provider
			value={{
				posts,
				searchResult,
				setPosts,
				search,
				setSearch,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export default DataContext
