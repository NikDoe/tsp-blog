import { Dispatch } from "redux"
import { api } from "../../api/postsApi"
import { PostsActionType, PostsReducerActionType } from "../../types"

export const fetchPosts = () => {
	return async (dispatch: Dispatch<PostsActionType>) => {
		try {
			dispatch({ type: PostsReducerActionType.FETCH_POSTS })
			const response = await api.get("posts")
			setTimeout(() => {
				dispatch({
					type: PostsReducerActionType.FETCH_POSTS_SUCCESS,
					payload: response.data,
				})
			}, 2000)
		} catch (error) {
			dispatch({
				type: PostsReducerActionType.FETCH_POSTS_ERROR,
				payload: "error fetching posts",
			})
		}
	}
}
