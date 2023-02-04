import { PostsActionType, PostsReducerActionType, PostsState } from "../../types"

const initialState: PostsState = {
	posts: [],
	isLoading: false,
	error: null,
}

export const postsReducer = (state = initialState, action: PostsActionType): PostsState => {
	switch (action.type) {
		case PostsReducerActionType.FETCH_POSTS:
			return { isLoading: true, error: null, posts: [] }
		case PostsReducerActionType.FETCH_POSTS_SUCCESS:
			return { isLoading: false, error: null, posts: action.payload }
		case PostsReducerActionType.FETCH_POSTS_ERROR:
			return { isLoading: false, error: action.payload, posts: [] }
		default:
			return state
	}
}
