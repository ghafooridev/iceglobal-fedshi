export const setItem = (key: string, data: string) => {
	localStorage.setItem(key, JSON.stringify(data))
}

export const getItem = <T>(key: string, defaultValue?: T): T => {
	let obj = defaultValue ?? null
	const item = localStorage.getItem(key)
	if (item !== null) obj = JSON.parse(item)

	return obj as T
}

export const removeItem = (key: string) => {
	localStorage.removeItem(key)
}
