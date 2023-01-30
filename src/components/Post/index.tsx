import { FC } from "react"
import { Link } from "react-router-dom"
import { IPost } from "../../types"

interface IPostProps {
	post: IPost
}

const Post: FC<IPostProps> = ({ post }) => {
	return (
		<article
			className="post"
			key={post.id}
		>
			<Link to={`/post/${post.id}`}>
				<h2>{post.title}</h2>
				<p>{post.datetime}</p>
			</Link>
			<p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}</p>
		</article>
	)
}

export default Post
