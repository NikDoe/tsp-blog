import { Dispatch } from "redux"
import { api } from "../../api/postsApi"
import { IPost, PostsActionType, PostsReducerActionType } from "../../types"

export const fetchPosts = (search: string) => {
	return async (dispatch: Dispatch<PostsActionType>) => {
		try {
			dispatch({ type: PostsReducerActionType.FETCH_POSTS })
			const { data } = await api.get<IPost[]>("posts")
			const result = data
				.filter(
					post =>
						post.title.toLowerCase().includes(search.toLowerCase()) ||
						post.body.toLowerCase().includes(search.toLowerCase())
				)
				.reverse()
			dispatch({
				type: PostsReducerActionType.FETCH_POSTS_SUCCESS,
				payload: result,
			})
		} catch (error) {
			dispatch({
				type: PostsReducerActionType.FETCH_POSTS_ERROR,
				payload: "error fetching posts",
			})
		}
	}
}

export const addNewPost = (post: IPost) => {
	return async (dispatch: Dispatch<PostsActionType>) => {
		const { data } = await api.post("posts", post)

		dispatch({ type: PostsReducerActionType.ADD_NEW_POST, payload: data })
	}
}

export const setSearch = (text: string) => {
	return { type: PostsReducerActionType.SET_SEARCH, payload: text }
}
