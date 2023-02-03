import { FormEvent, SetStateAction, useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { About, EditPost, Home, Layout, NewPost, NotFound, PostPage } from "./components"
import { IPost } from "./types"
import { format } from "date-fns"
import { api } from "./api/postsApi"
import { arEG } from "date-fns/locale"

function App() {
	const [posts, setPosts] = useState<IPost[]>([])

	const [postTitle, setPostTitle] = useState<string>("")
	const [postBody, setPostBody] = useState<string>("")
	const [search, setSearch] = useState<string>("")
	const [searchResult, setSearchResult] = useState<IPost[]>([])
	const [editTitle, setEditTitle] = useState<string>("")
	const [editBody, setEditBody] = useState<string>("")

	const navigate = useNavigate()

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await api.get<IPost[]>("posts")
				setPosts(response.data)
			} catch (error) {
				if (error instanceof Error) {
					console.log(error.message)
				} else {
					console.log("unexpected error")
				}
			}
		}

		fetchPosts()
	}, [])

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

	const handleAddNewPost = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		try {
			e.preventDefault()
			const id = posts.length ? posts[posts.length - 1].id + 1 : 1
			const datetime = format(new Date(), "MMMM dd, yyyy pp")
			const newPost = { id, title: postTitle, datetime, body: postBody }
			const response = await api.post<IPost>("posts", newPost)
			const allPosts = [...posts, response.data]
			setPosts(allPosts)
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

	const handleEditPost = async (id: number): Promise<void> => {
		try {
			const datetime = format(new Date(), "MMMM dd, yyyy pp")
			const updatePost = { id, title: editTitle, datetime, body: editBody }
			const response = await api.put(`posts/${id}`, updatePost)
			setPosts(posts.map(post => (post.id === id ? { ...response.data } : post)))
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
					path="edit/:id"
					element={
						<EditPost
							posts={posts}
							editTitle={editTitle}
							editBody={editBody}
							setEditTitle={setEditTitle}
							setEditBody={setEditBody}
							handleEditPost={handleEditPost}
						/>
					}
				/>
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
