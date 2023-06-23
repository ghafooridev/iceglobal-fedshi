export enum API_METHOD {
	GET = "get",
	POST = "post",
	PUT = "put",
	DELETE = "delete"
}

export interface UserInterface {
	id: number
	firstName: string
	lastName: string
	email: string
	avatar: string
}

export interface PostInterface {
	id: number
	title: string
	text: string
	image?: string
	likes?: number
	tags?: string[]
	publishDate: Date
	userId: number
	user?: UserInterface
}
