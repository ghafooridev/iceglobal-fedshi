import { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import createCache from "@emotion/cache"
import CircularProgress from "@mui/material/CircularProgress"
import { ToastContainer } from "react-toastify"
import Router from "@/router"
import "react-toastify/dist/ReactToastify.css"

export const muiCache = createCache({
	key: "mui",
	prepend: true
})
const queryClient = new QueryClient()

const App = () => {
	return (
		<Suspense fallback={<CircularProgress />}>
			<QueryClientProvider client={queryClient}>
				<Router />
				<ToastContainer />
			</QueryClientProvider>
		</Suspense>
	)
}

export default App
