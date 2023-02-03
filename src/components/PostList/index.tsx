import { FC, useContext } from "react"
import DataContext from "../../context/DataContext"
import Post from "../Post"

const PostList: FC = () => {
	const { searchResult } = useContext(DataContext)

	return (
		<ul>
			{searchResult.map(post => (
				<Post
					key={post.id}
					post={post}
				/>
			))}
		</ul>
	)
}
export default PostList
