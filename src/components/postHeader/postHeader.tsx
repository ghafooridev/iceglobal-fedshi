import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Grid, Icon, TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import { useStyles } from "./styles"

interface Props {
	onSearch: (value: string) => void
}

const PostHeader = (props: Props) => {
	const navigate = useNavigate()
	const { classes } = useStyles()
	const [search, setSearch] = useState("")

	const onAdd = () => {
		navigate("/createPost")
	}

	const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
		if (typeof props.onSearch === "function") props.onSearch(event.target.value)
	}

	return (
		<Grid className={classes.header}>
			<TextField
				value={search}
				placeholder="Search"
				onChange={onChangeSearch}
				InputProps={{
					className: "textField",
					startAdornment: (
						<InputAdornment position="start">
							<Icon>search</Icon>
						</InputAdornment>
					)
				}}
			></TextField>
			<Button variant="contained" endIcon={<Icon>add_circle</Icon>} onClick={onAdd} className="button">
				Add New Post
			</Button>
		</Grid>
	)
}

export default PostHeader
