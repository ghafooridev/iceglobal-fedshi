import { useTranslation } from "react-i18next"
import { Tooltip, Avatar } from "@mui/material"
import { LanguageEnum } from "@/components/languageSelector/languageEnum"
import EN from "@/assets/img/en.png"
import TR from "@/assets/img/tr.png"
import { setItem } from "@/config/storage"
import { CURRENT_LANGUAGE } from "@/constants"

const LanguageSelector = () => {
	const { i18n } = useTranslation()

	const checkLanguage = () => {
		return i18n.language === LanguageEnum.EN ? LanguageEnum.TR : LanguageEnum.EN
	}

	const onChangeLanguage = () => {
		const currentLanguage = checkLanguage()
		i18n.changeLanguage(currentLanguage)
		setItem(CURRENT_LANGUAGE, currentLanguage)
	}

	return (
		<Tooltip title="click to change language">
			<Avatar alt="EN" src={checkLanguage() === LanguageEnum.EN ? EN : TR} onClick={onChangeLanguage} />
		</Tooltip>
	)
}

export default LanguageSelector
