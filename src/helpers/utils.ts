export const getProperQueryString = (query: any) => {
	return new URLSearchParams(query)?.toString()
}
export const uniqueId = () => {
	return +new Date()
}

export const formatDate = (date: Date | string = new Date()) => {
	return new Date(date).toLocaleDateString("en-US")
}
