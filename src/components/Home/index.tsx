import { FC } from "react"
import { IPost } from "../../types"
import PostList from "../PostList"

interface IHomeProps {
	posts: IPost[]
}

const Home: FC<IHomeProps> = ({ posts }) => {
	return <main>{posts.length ? <PostList posts={posts} /> : <p>List post is empty 😒</p>}</main>
}

export default Home
