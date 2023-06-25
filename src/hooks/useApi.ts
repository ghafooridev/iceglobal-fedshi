import { useMutation, useQuery } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"
import { toast } from "react-toastify"
import { API_METHOD } from "@/constants/enum"
import { http } from "@/config/axios"

const fetchFromApi = async (params: AxiosRequestConfig) => {
	const res = await http.request(params)
	return res
}

const useQueryApi = (key: string, params: AxiosRequestConfig, enabled = true) => {
	return useQuery({ queryKey: [params.url], queryFn: () => fetchFromApi(params), enabled, cacheTime: 10 })
}

const useMutateApi = (params: AxiosRequestConfig) => {
	return useMutation(() => fetchFromApi(params), {
		onSuccess: async () => {
			if (params.method !== API_METHOD.GET) toast.success("Post is successfully added")
		},
		onError: async () => {
			if (params.method !== API_METHOD.GET) toast.error("Failed to add post")
		}
	})
}
export { useQueryApi, useMutateApi }
