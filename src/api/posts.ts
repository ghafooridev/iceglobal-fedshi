import { useQueryApi, useMutateApi } from "@/hooks/useApi"
import { API_METHOD, PostInterface } from "@/constants/enum"
import { getProperQueryString } from "@/helpers/utils"

interface QueryParams {
	q?: string
}

export const useGetPosts = (params: QueryParams) => {
	return useQueryApi("posts", { url: `/posts?_expand=user&${getProperQueryString(params)}`, method: API_METHOD.GET })
}

export const useGetPost = (id: string | undefined) => {
	return useQueryApi("postsDetail", { url: `/posts/${id}`, method: API_METHOD.GET }, false)
}

export const useDeletePost = (id: string | undefined) => {
	return useMutateApi({ url: `/posts/${id}`, method: API_METHOD.DELETE })
}

export const useAddPost = (post: Pick<PostInterface, "title" | "text" | "tags"> | undefined) => {
	return useMutateApi({ url: "/posts", data: post, method: API_METHOD.POST })
}
