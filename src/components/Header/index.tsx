import { FC } from "react"

interface IHeaderProps {
	title: string
}

const Header: FC<IHeaderProps> = ({ title }) => {
	return <header>{title}</header>
}

export default Header
