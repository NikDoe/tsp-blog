import { combineReducers } from "redux"
import { postsReducer } from "./postReducer"

export const rootReducer = combineReducers({
	posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
