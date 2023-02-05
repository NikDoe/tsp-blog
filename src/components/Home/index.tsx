import { FC, useEffect } from "react"
import { useActions, useTypedSelector } from "../../hooks"
import PostList from "../PostList"

const Home: FC = () => {
	const { isLoading, error, search } = useTypedSelector(state => state.posts)
	const { fetchPosts } = useActions()

	useEffect(() => {
		fetchPosts(search)
	}, [search])

	let content

	if (isLoading) content = <p>loading posts...</p>

	if (error) content = <p>{error}</p>

	if (!isLoading && !error) content = <PostList />

	return <main>{content}</main>
}

export default Home
