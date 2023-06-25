import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(theme => ({
	container: {
		paddingTop: theme.spacing(3)
	},
	content: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		"& .inputGroup": {
			width: "100%",
			marginBottom: 24,
			"& span": {
				fontSize: 22,
				fontWeight: 500,
				marginLeft: 8,
				marginBottom: 4
			}
		}
	},
	row: {
		marginBottom: theme.spacing(3)
	},

	loadingBlock: {
		padding: 12,
		border: `1px solid ${theme.palette.grey[200]}`,
		borderRadius: 4,
		marginTop: 24,
		width: 245,
		position: "relative",
		"& .loadingChip": {
			borderRadius: 20
		},
		"& .loadingChips": {
			display: "flex",
			justifyContent: "space-between"
		},
		"& .loadingFooter": {
			display: "flex",
			alignItems: "center"
		},

		"& .loadingFooterUser": {
			display: "flex",
			flexDirection: "column",
			marginLeft: 12,
			"& span": {
				marginBottom: 5
			}
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
			"& img": {
				width: "100%",
				height: 250
			}
		}
	},
	header: {
		marginBottom: theme.spacing(3),
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		"& .title": {
			display: "flex",
			alignItems: "center"
		},

		"& .backIcon": {
			padding: 5,
			border: `1px solid ${theme.palette.grey[500]}`,
			borderRadius: "100%",
			width: 40,
			height: 40,
			cursor: "pointer"
		},
		"& h6": {
			fontSize: 22,
			fontWeight: 700,
			marginLeft: 24
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
	},
	chip: {
		margin: 2,
		borderColor: theme.palette.grey[500],
		color: theme.palette.grey[500]
	}
}))
