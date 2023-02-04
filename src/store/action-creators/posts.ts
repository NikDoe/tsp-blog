import { Dispatch } from "redux"
import { api } from "../../api/postsApi"
import { IPost, PostsActionType, PostsReducerActionType } from "../../types"

export const fetchPosts = () => {
	return async (dispatch: Dispatch<PostsActionType>) => {
		try {
			dispatch({ type: PostsReducerActionType.FETCH_POSTS })
			const response = await api.get("posts")
			dispatch({
				type: PostsReducerActionType.FETCH_POSTS_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: PostsReducerActionType.FETCH_POSTS_ERROR,
				payload: "error fetching posts",
			})
		}
	}
}

export const setSearch = (text: string) => {
	return { type: PostsReducerActionType.SET_SEARCH, payload: text }
}
