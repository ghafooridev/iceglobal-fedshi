import { useState, ChangeEvent, KeyboardEvent, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Container, Grid, Avatar, Link, Typography, Button, TextField, Paper } from "@mui/material"
import { toast } from "react-toastify"
import Icon from "@mui/material/Icon"
import { useStyles } from "@/pages/login/styles"
import { useLogin } from "@/api/users"
import { userContext } from "@/contexts/userContext"
import { setItem } from "@/config/storage"
import { CURRENT_USER } from "@/constants"
import useDidMountEffect from "@/hooks/useDidMountEffect"

const Login = () => {
	const { t } = useTranslation()

	const [state, setState] = useState({
		email: "",
		password: ""
	})

	const { isLoading, data, refetch } = useLogin(state)

	const { setUser } = useContext(userContext)
	const { classes } = useStyles()

	const navigate = useNavigate()

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setState({
			...state,
			[event.target.name]: value
		})
	}

	const onPressPassword = (event: KeyboardEvent<HTMLImageElement>) => {
		if (event.key === "Enter") onSubmit()
	}

	const onSubmit = () => {
		refetch()
	}

	useDidMountEffect(() => {
		if (data?.data.length) {
			setItem(CURRENT_USER, data?.data[0])
			setUser(data?.data[0])
			navigate("/dashboard")
		} else {
			if (state.email !== "" && state.password !== "") toast.error(t("general.invalidCredential"))
		}
	}, [data?.data])

	return (
		<main className={classes.container}>
			<Container maxWidth="xs">
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<Icon>lock</Icon>
					</Avatar>
					<Typography component="h1" variant="h5">
						{t("login.signIn")}
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label={t("login.email")}
							name="email"
							autoFocus
							onChange={handleChangeInput}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label={t("login.password")}
							type="password"
							id="password"
							onChange={handleChangeInput}
							onKeyPress={onPressPassword}
						/>
						<Button
							type="button"
							fullWidth
							variant="contained"
							color="primary"
							onClick={onSubmit}
							className={classes.submit}
						>
							{isLoading ? t("login.loading") : t("login.signIn")}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									{t("login.forgetPassword")}
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{t("login.signUp")}
								</Link>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</Container>
		</main>
	)
}

export default Login
