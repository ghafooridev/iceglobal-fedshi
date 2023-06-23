import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		width: "100%",
		background: `linear-gradient(to left top, ${theme.palette.primary.main}, ${theme.palette.error.main})`
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(3)
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}))
