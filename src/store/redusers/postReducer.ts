import { PostsActionType, PostsReducerActionType, PostsState } from "../../types"

const initialState: PostsState = {
	posts: [],
	isLoading: false,
	error: null,
	search: "",
}

export const postsReducer = (state = initialState, action: PostsActionType): PostsState => {
	switch (action.type) {
		case PostsReducerActionType.FETCH_POSTS:
			return { ...state, isLoading: true, error: null, posts: [] }
		case PostsReducerActionType.FETCH_POSTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				posts: action.payload,
			}
		case PostsReducerActionType.FETCH_POSTS_ERROR:
			return { ...state, isLoading: false, error: action.payload, posts: [] }
		case PostsReducerActionType.SET_SEARCH:
			return { ...state, search: action.payload }
		case PostsReducerActionType.ADD_NEW_POST:
			return { ...state, posts: [...state.posts, action.payload] }
		default:
			return state
	}
}
