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

export interface PostsState {
	posts: IPost[]
	isLoading: boolean
	error: null | string
	search: string
}

export enum PostsReducerActionType {
	FETCH_POSTS = "FETCH_POSTS",
	FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
	FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
	SET_SEARCH = "SET_SEARCH",
	SEARCH_POSTS = "SEARCH_POSTS",
}

interface FetchPostsAction {
	type: PostsReducerActionType.FETCH_POSTS
}

interface FetchPostsSuccessAction {
	type: PostsReducerActionType.FETCH_POSTS_SUCCESS
	payload: IPost[]
}

interface FetchPostsErrorAction {
	type: PostsReducerActionType.FETCH_POSTS_ERROR
	payload: string
}

interface SetSearchAction {
	type: PostsReducerActionType.SET_SEARCH
	payload: string
}

interface SearchPostsAction {
	type: PostsReducerActionType.SEARCH_POSTS
	payload: IPost[]
}

export type PostsActionType =
	| FetchPostsAction
	| FetchPostsSuccessAction
	| FetchPostsErrorAction
	| SetSearchAction
	| SearchPostsAction
