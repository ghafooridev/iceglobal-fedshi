import { Grid, Icon, Chip, Avatar } from "@mui/material"
import { useStyles } from "./styles"
import { PostInterface } from "@/constants/enum"
import { formatDate } from "@/helpers/utils"

interface Props {
	post: PostInterface
}

const PostCard = ({ post }: Props) => {
	const { classes } = useStyles()

	return (
		<div className={classes.block}>
			<img src={post.image} alt="post image" />
			<h6 className="title">{post.title}</h6>
			<p className="text">{post.text.length > 100 ? post.text.substring(0, 97) + "..." : post.text}</p>
			<Grid className={classes.chips}>
				{post.tags?.map((item: string, index) => {
					return <Chip key={`${item}${index}`} label={item} variant="outlined" className={classes.chip} />
				})}
			</Grid>
			<Grid className={classes.footer}>
				<Grid className={classes.user}>
					<Avatar alt={post.user?.firstName} src={post.user?.avatar} />
					<Grid>
						<p className="name">{`${post.user?.firstName}  ${post.user?.lastName}`}</p>
						<span className="date">{formatDate(post.publishDate?.toString())}</span>
					</Grid>
				</Grid>
				<Grid className={classes.like}>
					<p className="number">{post.likes}</p>
					<Icon>favorite_outline</Icon>
				</Grid>
			</Grid>
		</div>
	)
}

export default PostCard
