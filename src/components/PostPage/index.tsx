import { FC, useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { api } from "../../api/postsApi"
import DataContext from "../../context/DataContext"

const PostPage: FC = () => {
	const { posts, setPosts } = useContext(DataContext)
	const { id } = useParams()
	const navigate = useNavigate()

	const post = posts.find(post => post.id.toString() === id)

	const handleDelete = async (id: number): Promise<void> => {
		try {
			const list = posts.filter(post => post.id !== id)
			await api.delete(`posts/${id}`)
			setPosts(list)
			navigate("/")
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message)
			} else {
				console.log("unexpected error")
			}
		}
	}

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
