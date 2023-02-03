import { FC } from "react"
import { Link, useParams } from "react-router-dom"
import { IPost } from "../../types"

interface IPostPageProps {
	posts: IPost[]
	handleDelete: (id: number) => void
}
const PostPage: FC<IPostPageProps> = ({ posts, handleDelete }) => {
	const { id } = useParams()

	const post = posts.find(post => post.id.toString() === id)
	return (
		<main>
			<article>
				{post && (
					<>
						<h2>{post.title}</h2>
						<p>{post.datetime}</p>
						<p>{post.body}</p>
						<button onClick={() => handleDelete(post.id)}>Delete Post</button>
						<Link to={`/edit/${post.id}`}>
							<button>Edit Post</button>
						</Link>
					</>
				)}
				{!post && (
					<>
						<h2>Post Not Found</h2>
						<p>Well, that's disappointing.</p>
						<p>
							<Link to="/">Visit Our Homepage</Link>
						</p>
					</>
				)}
			</article>
		</main>
	)
}

export default PostPage
