import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Toolbar, AppBar, Avatar, Typography, Grid, Icon, Tooltip } from "@mui/material"
import { USER_ROLE } from "@/constants/enum"
import { CURRENT_USER } from "@/constants"
import { useStyles } from "@/components/header/styles"
import LanguageSelector from "@/components/languageSelector"
import { userContext } from "@/contexts/userContext"
import { removeItem } from "@/config/storage"

const Header = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { user, setUser } = useContext(userContext)
	const { classes } = useStyles()

	const onClickProfile = () => {
		navigate("/profile")
	}

	const onClickLogOut = () => {
		setUser(null)
		removeItem(CURRENT_USER)
		navigate("/")
	}

	return (
		<AppBar position="static">
			<Toolbar>
				{user?.role === USER_ROLE.ADMIN && (
					<Grid container spacing={2}>
						<Link to={"/users"}>
							<Typography className={classes.gap}>{t("general.users")}</Typography>
						</Link>
						<Link to={"/events"}>
							<Typography className={classes.gap}>{t("general.events")}</Typography>
						</Link>

						<Link to={"/eventTypes"}>
							<Typography className={classes.gap}>{t("general.eventTypes")}</Typography>
						</Link>
					</Grid>
				)}
				<Grid container spacing={2} justifyContent="flex-end">
					<LanguageSelector />
					<Tooltip title="click to manage profile">
						<Avatar sx={{ width: 35, height: 35 }} className={classes.gap} onClick={onClickProfile}>
							<Icon>person</Icon>
						</Avatar>
					</Tooltip>
					<Tooltip title="click to log out">
						<Avatar sx={{ width: 35, height: 35 }} onClick={onClickLogOut}>
							<Icon>lock</Icon>
						</Avatar>
					</Tooltip>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Header
