import { format } from "date-fns"
import { FC, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { api } from "../../api/postsApi"
import { useTypedSelector } from "../../hooks"

const EditPost: FC = () => {
	const [editTitle, setEditTitle] = useState<string>("")
	const [editBody, setEditBody] = useState<string>("")
	const { posts } = useTypedSelector(state => state.posts)
	const { id } = useParams()
	const post = posts.find(post => post.id.toString() === id)

	const navigate = useNavigate()

	useEffect(() => {
		if (post) {
			setEditTitle(post.title)
			setEditBody(post.body)
		}
	}, [post, setEditTitle, setEditBody])

	const handleEditPost = async (id: number): Promise<void> => {
		try {
			const datetime = format(new Date(), "MMMM dd, yyyy pp")
			const updatePost = { id, title: editTitle, datetime, body: editBody }
			const response = await api.put(`posts/${id}`, updatePost)
			setEditTitle("")
			setEditBody("")
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
			{post && (
				<>
					<h2>Edit Post</h2>
					<form
						className="new-post__form"
						onSubmit={e => e.preventDefault()}
					>
						<input
							type="text"
							required
							value={editTitle}
							onChange={e => setEditTitle(e.target.value)}
						/>
						<textarea
							required
							value={editBody}
							onChange={e => setEditBody(e.target.value)}
						/>
						<button
							type="submit"
							onClick={() => handleEditPost(post.id)}
						>
							Submit
						</button>
					</form>
				</>
			)}
			{!post && (
				<>
					<h2>Post Not Found</h2>
					<p>
						<Link to="/">To Homepage</Link>
					</p>
				</>
			)}
		</main>
	)
}

export default EditPost
