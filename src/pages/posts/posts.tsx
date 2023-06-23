import { useNavigate } from "react-router-dom"
import {
	Table,
	TableContainer,
	TableCell,
	TableHead,
	TableBody,
	TableRow,
	Button,
	Paper,
	Container,
	Grid,
	Typography,
	Icon
} from "@mui/material"
import { useTranslation } from "react-i18next"
import { useStyles } from "@/pages/posts/styles"
import { PostInterface } from "@/constants/enum"
import { useGetPosts } from "@/api/posts"

const EventTypes = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { classes } = useStyles()

	const { data } = useGetPosts({ q: "" })

	const onDetail = (id: number) => {
		navigate(`/postDetail/${id}`)
	}

	const onAdd = () => {
		navigate("/createPost")
	}
	return (
		<Container maxWidth="md" className={classes.container}>
			<Paper className={classes.header}>
				<Typography variant="h6">{t("eventTypes.list")}</Typography>
				<Grid>
					<Button onClick={onAdd} color="primary" variant="contained">
						{t("actions.add")}
						<Icon>add</Icon>
					</Button>
				</Grid>
			</Paper>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>{t("eventTypes.name")}</TableCell>

							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.data.map((row: PostInterface) => (
							<TableRow key={row.title} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component="th" scope="row">
									{row.title}
								</TableCell>
								<TableCell align="right">
									<Button onClick={() => onDetail(row.id)} color="primary" variant="contained">
										{t("actions.detail")}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default EventTypes
