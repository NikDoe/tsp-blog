import { FC } from "react"
import { IPost } from "../../types"
import Post from "../Post"

interface IPostListProps {
	posts: IPost[]
}
const PostList: FC<IPostListProps> = ({ posts }) => {
	return (
		<ul>
			{posts.map(post => (
				<Post
					key={post.id}
					post={post}
				/>
			))}
		</ul>
	)
}
export default PostList
