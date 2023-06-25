import { BrowserRouter, Routes, Route } from "react-router-dom"
import Posts from "@/pages/posts"
import PostAdd from "@/pages/posts/postAdd"
import NotFound from "@/pages/notFound/NotFound"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/" element={<Posts />} />
					<Route path="posts" element={<Posts />} />
					<Route path="createPost" element={<PostAdd />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
