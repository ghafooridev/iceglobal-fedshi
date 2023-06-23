import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	container: {
		paddingTop: theme.spacing(3)
	},
	content: {
		padding: theme.spacing(5)
	},
	row: {
		marginBottom: theme.spacing(3)
	},
	header: {
		marginBottom: theme.spacing(3),
		padding: theme.spacing(1),
		display: "flex",
		justifyContent: "space-between"
	}
}))
