import { useState, ChangeEvent, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Grid, TextField, Button, Paper, Container, Icon } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useStyles } from "@/pages/posts/styles"
import { uniqueId } from "@/helpers/utils"
import { PostInterface } from "@/constants/enum"
import { useGetPost, useDeletePost } from "@/api/posts"

const PostDetail = () => {
	const [state, setState] = useState<PostInterface>()
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { classes } = useStyles()
	const { id } = useParams()
	const postDetail = useGetPost(id)
	const deletePost = useDeletePost(id)

	useEffect(() => {
		setState(postDetail.data?.data)
	}, [postDetail.data?.data])

	// useEffect(() => {
	// 	if (id) postDetail.refetch()
	// 	else {
	// 		setState(initState)
	// 	}
	// }, [])

	// const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const value = event.target.value
	// 	setState({
	// 		...state,
	// 		[event.target.name]: value
	// 	})
	// }

	// const onSave = () => {
	// 	if (id) return editPost.mutate()
	// 	addPost.mutate()
	// }

	const onBack = () => {
		navigate("/posts")
	}

	const onDelete = () => {
		deletePost.mutate()
	}
	return (
		<Container maxWidth="sm" className={classes.container}>
			<Paper className={classes.content}>
				<Grid item xs={12} className={classes.row}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="image"
						value={state?.image}
						label={t("posts.image")}
						name="image"
						aria-readonly
					/>
				</Grid>
				<Grid item xs={12} className={classes.row}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="title"
						value={state?.title}
						label={t("posts.name")}
						name="title"
						aria-readonly
					/>
				</Grid>
				<Grid item xs={12} className={classes.row}>
					<TextField
						multiline
						maxRows={4}
						variant="outlined"
						margin="normal"
						fullWidth
						id="text"
						value={state?.text}
						label={t("posts.name")}
						name="text"
						aria-readonly
					/>
				</Grid>

				<Grid item xs={12} className={classes.row}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="tags"
						value={state?.tags}
						label={t("posts.name")}
						name="tags"
						aria-readonly
					/>
				</Grid>

				<Grid item xs={12} className={classes.row}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="publishDate"
						value={state?.publishDate}
						label={t("posts.publishDate")}
						name="publishDate"
						aria-readonly
					/>
				</Grid>

				<Grid item xs={12} className={classes.row}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="publishDate"
						value={state?.publishDate}
						label={t("posts.publishDate")}
						name="publishDate"
						aria-readonly
					/>
				</Grid>

				<Grid item xs={12} container justifyContent="space-between">
					<Button onClick={onBack} color="inherit" variant="contained">
						{t("actions.back")}
						<Icon>chevron_left</Icon>
					</Button>
					<Button onClick={onDelete} color="error" variant="contained" disabled={!id}>
						{t("actions.delete")}
						<Icon>delete</Icon>
					</Button>
					<Button onClick={onSave} color="primary" variant="contained">
						{t("actions.save")}
						<Icon>check</Icon>
					</Button>
				</Grid>
			</Paper>
		</Container>
	)
}

export default PostDetail
