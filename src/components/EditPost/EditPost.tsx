import { Dispatch, FC, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { IPost } from "../../types"

interface IEditPostProps {
	posts: IPost[]
	editTitle: string
	editBody: string
	setEditTitle: Dispatch<React.SetStateAction<string>>
	setEditBody: Dispatch<React.SetStateAction<string>>
	handleEditPost: (id: number) => void
}

const EditPost: FC<IEditPostProps> = ({
	posts,
	editTitle,
	setEditTitle,
	editBody,
	setEditBody,
	handleEditPost,
}) => {
	const { id } = useParams()
	const post = posts.find(post => post.id.toString() === id)

	useEffect(() => {
		if (post) {
			setEditTitle(post.title)
			setEditBody(post.body)
		}
	}, [post, setEditTitle, setEditBody])

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
