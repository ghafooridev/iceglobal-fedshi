import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	block: {
		padding: 12,
		border: `1px solid ${theme.palette.grey[200]}`,
		borderRadius: 4,
		marginTop: 24,
		width: 245,
		position: "relative",
		"& img": {
			width: 221,
			height: 123,
			borderRadius: 4
		},
		"& .title": {
			fontSize: 18,
			fontWeight: 700,
			marginTop: 10,
			marginBottom: 0
		},
		"& .text": {
			fontSize: 14,
			marginTop: 10,
			color: theme.palette.grey[500]
		},
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			"& img": {
				width: "100%",
				height: 250
			}
		}
	},
	chips: {
		marginBottom: 50
	},
	chip: {
		margin: 2,
		borderColor: theme.palette.grey[500],
		color: theme.palette.grey[500]
	},
	footer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		bottom: 10,
		width: 220,
		[theme.breakpoints.down("sm")]: {
			width: "94%"
		}
	},
	user: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "end",
		"& .name": {
			fontSize: 10,
			fontWeight: 500,
			marginLeft: 10
		},
		"& .date": {
			fontSize: 10,
			color: theme.palette.grey[500],
			marginLeft: 10
		}
	},
	like: {
		display: "flex",
		alignItems: "center",
		"& .number": {
			fontSize: 12,
			color: theme.palette.grey[500],
			marginRight: 4
		},
		"& span": {
			color: theme.palette.grey[500]
		}
	}
}))
