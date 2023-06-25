import { useState } from "react"
import { Container, Grid } from "@mui/material"
import Loading from "./loading"
import { useStyles } from "@/pages/posts/styles"
import { PostInterface } from "@/constants/enum"
import { useGetPosts } from "@/api/posts"
import PostCard from "@/components/postCard/postCard"
import PostHeader from "@/components/postHeader/postHeader"
import { useDebounce } from "@/hooks/useDebounce"

const Posts = () => {
	const { classes } = useStyles()
	const [search, setSearch] = useState("")
	const searchQuery = useDebounce(search, 2000)
	const { data, isLoading } = useGetPosts({ q: searchQuery })

	const onSearch = (value: string) => {
		setSearch(value)
	}

	return (
		<Container className={classes.container}>
			<PostHeader onSearch={onSearch} />
			<Grid className={classes.content}>
				{isLoading ? (
					<Loading />
				) : (
					data?.data?.slice(20, 50).map((item: PostInterface) => {
						return <PostCard key={item.id} post={item} />
					})
				)}
			</Grid>
		</Container>
	)
}

export default Posts
