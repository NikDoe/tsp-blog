import { ChangeEvent, FC, FormEvent, useState } from "react"
import { format } from "date-fns"
import { api } from "../../api/postsApi"
import { IPost } from "../../types"
import { useNavigate } from "react-router-dom"
import { useTypedSelector } from "../../hooks"

const NewPost: FC = () => {
	const { posts } = useTypedSelector(state => state.posts)
	const [postTitle, setPostTitle] = useState<string>("")
	const [postBody, setPostBody] = useState<string>("")

	const navigate = useNavigate()

	const handleAddNewPost = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		try {
			e.preventDefault()
			const id = posts.length ? posts[posts.length - 1].id + 1 : 1
			const datetime = format(new Date(), "MMMM dd, yyyy pp")
			const newPost = { id, title: postTitle, datetime, body: postBody }
			const response = await api.post<IPost>("posts", newPost)
			const allPosts = [...posts, response.data]
			// setPosts(allPosts)
			setPostTitle("")
			setPostBody("")
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
			<form
				className="new-post__form"
				onSubmit={handleAddNewPost}
			>
				<input
					type="text"
					placeholder="new title"
					value={postTitle}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setPostTitle(e.target.value)}
				/>
				<textarea
					placeholder="new text"
					value={postBody}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPostBody(e.target.value)}
				/>
				<button type="submit">add new post</button>
			</form>
		</main>
	)
}

export default NewPost
