import { FC } from "react"
import { useTypedSelector } from "../../hooks"
import Post from "../Post"

const PostList: FC = () => {
	const { posts } = useTypedSelector(state => state.posts)

	return (
		<>
			{posts.length ? (
				<ul>
					{posts.map(post => (
						<Post
							key={post.id}
							post={post}
						/>
					))}
				</ul>
			) : (
				<p>posts list is empty 😒😒</p>
			)}
		</>
	)
}
export default PostList
