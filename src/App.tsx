import { FormEvent, useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { About, Home, Layout, NewPost, NotFound, PostPage } from "./components"
import { IPost } from "./types"
import { format } from "date-fns"

function App() {
	const [posts, setPosts] = useState<IPost[]>([
		{
			id: 1,
			title: "My First Post",
			datetime: "July 01, 2021 11:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
		},
		{
			id: 2,
			title: "My 2nd Post",
			datetime: "July 01, 2021 11:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
		},
		{
			id: 3,
			title: "My 3rd Post",
			datetime: "July 01, 2021 11:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
		},
		{
			id: 4,
			title: "My Fourth Post",
			datetime: "July 01, 2021 11:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
		},
	])

	const [postTitle, setPostTitle] = useState<string>("")
	const [postBody, setPostBody] = useState<string>("")
	const [search, setSearch] = useState<string>("")
	const [searchResult, setSearchResult] = useState<IPost[]>([])

	const navigate = useNavigate()

	useEffect(() => {
		const result = posts
			.filter(
				post =>
					post.title.toLowerCase().includes(search.toLowerCase()) ||
					post.body.toLowerCase().includes(search.toLowerCase())
			)
			.reverse()

		setSearchResult(result)
	}, [posts, search])

	const handleDelete = (id: number): void => {
		const list = posts.filter(post => post.id !== id)
		setPosts(list)
		navigate("/")
	}

	const handleAddNewPost = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1
		const datetime = format(new Date(), "MMMM dd, yyyy pp")
		const newPost = { id, title: postTitle, datetime, body: postBody }
		const allPosts = [...posts, newPost]
		setPosts(allPosts)
		setPostTitle("")
		setPostBody("")
		navigate("/")
	}

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout
						search={search}
						setSearch={setSearch}
					/>
				}
			>
				<Route
					index
					element={<Home posts={searchResult} />}
				/>
				<Route path="post">
					<Route
						index
						element={
							<NewPost
								postTitle={postTitle}
								postBody={postBody}
								setPostTitle={setPostTitle}
								setPostBody={setPostBody}
								handleAddNewPost={handleAddNewPost}
							/>
						}
					/>
					<Route
						path=":id"
						element={
							<PostPage
								posts={posts}
								handleDelete={handleDelete}
							/>
						}
					/>
				</Route>
				<Route
					path="about"
					element={<About />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	)
}

export default App
