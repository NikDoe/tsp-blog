import { FC, useContext } from "react"
import DataContext from "../../context/DataContext"
import PostList from "../PostList"

const Home: FC = () => {
	const { searchResult } = useContext(DataContext)

	return <main>{searchResult.length ? <PostList /> : <p>List post is empty 😒</p>}</main>
}

export default Home
