import { useDispatch, useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux/es/types"
import { RootState } from "../store/redusers"
import { bindActionCreators } from "redux"
import * as PostsActionCreators from "../store/action-creators/posts"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(PostsActionCreators, dispatch)
}
