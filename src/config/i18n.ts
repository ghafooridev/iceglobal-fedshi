import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import HttpApi from "i18next-http-backend"
import { getItem } from "@/config/storage"
import { CURRENT_LANGUAGE } from "@/constants"

i18next
	.use(initReactI18next)
	.use(HttpApi)
	.init({
		lng: (getItem(CURRENT_LANGUAGE) as string) ?? "EN",
		interpolation: {
			escapeValue: false
		}
	})

export default i18next
