import { useState, ChangeEvent, useRef, KeyboardEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Grid, TextField, Icon, Button, InputAdornment, Chip } from "@mui/material"
import { useStyles } from "@/pages/posts/styles"
import { useAddPost } from "@/api/posts"

const PostAdd = () => {
	const { classes } = useStyles()
	const navigate = useNavigate()
	const [state, setState] = useState({
		title: "",
		text: ""
	})

	const [tags, setTags] = useState<string[]>([])
	const tagRef = useRef<any>(null)
	const addPostMutation = useAddPost({ ...state, tags })

	const onAdd = () => {
		addPostMutation.mutate()
	}

	const onBack = () => {
		navigate("/")
	}

	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target

		setState({
			...state,
			[event.target.name]: value
		})
	}

	const onAddTags = () => {
		const { value } = tagRef.current!
		if (!tags.includes(value)) {
			setTags([...tags, value])
			tagRef.current.value = ""
		}
	}

	const onDeleteChip = (value: string) => {
		const temp = [...tags]
		const newTags = temp.filter(item => item !== value)
		setTags(newTags)
	}

	const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onAddTags()
		}
	}

	return (
		<Container className={classes.container}>
			<Grid className={classes.header}>
				<div className="title">
					<Icon className="backIcon" onClick={onBack}>
						arrow_back
					</Icon>
					<h6>New Post</h6>
				</div>

				<Button variant="contained" onClick={onAdd} className="button">
					Publish Post
				</Button>
			</Grid>
			<Grid className={classes.content}>
				<Grid className="inputGroup">
					<span>Title</span>
					<TextField fullWidth value={state.title} name="title" onChange={onChangeInput} />
				</Grid>
				<Grid className="inputGroup">
					<span>Description</span>
					<TextField fullWidth value={state.text} name="text" onChange={onChangeInput} multiline rows={4} />
				</Grid>
				<Grid className="inputGroup">
					<span>Tags</span>
					<TextField
						onKeyDown={onPressEnter}
						fullWidth
						inputRef={tagRef}
						InputProps={{
							className: "textField",
							endAdornment: (
								<InputAdornment position="end">
									<Button
										color="inherit"
										endIcon={<Icon>add</Icon>}
										onClick={onAddTags}
										style={{ display: "flex", alignItems: "center" }}
									>
										Add
									</Button>
								</InputAdornment>
							)
						}}
					/>
					<Grid style={{ marginTop: 20 }}>
						{tags.map((item, index) => {
							return (
								<Chip
									key={`${item}${index}`}
									label={item}
									onDelete={() => onDeleteChip(item)}
									variant="outlined"
									className={classes.chip}
								/>
							)
						})}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PostAdd
