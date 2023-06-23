import { BrowserRouter, Routes, Route } from "react-router-dom"
import Posts from "@/pages/posts"
import PostDetail from "@/pages/posts/postDetail"
import PostAdd from "@/pages/posts/postAdd"
import NotFound from "@/pages/notFound/NotFound"
import Layout from "@/layout"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Posts />} />
					<Route path="posts" element={<Posts />} />
					<Route path="posts/:id" element={<PostDetail />} />
					<Route path="createPost" element={<PostAdd />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
