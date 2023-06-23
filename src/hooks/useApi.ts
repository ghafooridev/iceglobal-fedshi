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
	return useQuery({ queryKey: [key], queryFn: () => fetchFromApi(params), enabled, cacheTime: 2000 })
}

const useMutateApi = (params: AxiosRequestConfig) => {
	return useMutation(() => fetchFromApi(params), {
		onSuccess: async () => {
			if (params.method !== API_METHOD.GET) toast.success("Successful Action")
		},
		onError: async () => {
			if (params.method !== API_METHOD.GET) toast.error("Failed Action")
		}
	})
}
export { useQueryApi, useMutateApi }
