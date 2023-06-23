import { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@/config/i18n"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import createCache from "@emotion/cache"
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
		<Suspense fallback="Loading...">
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<QueryClientProvider client={queryClient}>
					<Router />
					<ToastContainer />
				</QueryClientProvider>
			</LocalizationProvider>
		</Suspense>
	)
}

export default App
