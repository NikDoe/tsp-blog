import { ChangeEvent, Dispatch, FC, FormEvent } from "react"

interface INewPostProps {
	postTitle: string
	postBody: string
	setPostTitle: Dispatch<React.SetStateAction<string>>
	setPostBody: Dispatch<React.SetStateAction<string>>
	handleAddNewPost: (e: FormEvent<HTMLFormElement>) => void
}

const NewPost: FC<INewPostProps> = ({
	postTitle,
	setPostTitle,
	postBody,
	setPostBody,
	handleAddNewPost,
}) => {
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
