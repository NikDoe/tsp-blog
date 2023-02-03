import { Dispatch } from "react"

export interface IPost {
	id: number
	title: string
	datetime: string
	body: string
}

export type PostsContextType = {
	posts: IPost[]
	searchResult: IPost[]
	setPosts: Dispatch<React.SetStateAction<IPost[]>>
	search: string
	setSearch: Dispatch<React.SetStateAction<string>>
}
