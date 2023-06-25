import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	header: {
		marginBottom: theme.spacing(3),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"& .textField": {
			borderRadius: 24,
			width: 316,
			height: 40,
			padding: 16,
			[theme.breakpoints.down("sm")]: {
				width: "100%"
			}
		},
		"& .button": {
			borderRadius: 24,
			width: 175,
			height: 40,
			padding: 16,
			fontSize: 14,
			fontWeight: 700,
			textTransform: "none",
			"& span": {
				fontSize: 24
			}
		}
	}
}))
