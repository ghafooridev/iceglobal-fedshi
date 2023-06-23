import { useEffect, useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "@/components/header"
import { userContext } from "@/contexts/userContext"

const Layout = () => {
	const { user } = useContext(userContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (!user?.id) navigate("/")
	}, [])

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default Layout
