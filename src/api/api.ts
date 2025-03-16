import axios from "axios"
import { Response } from "../shared/types/Response"

export type ApiUrls = 'character' | 'location' | 'episode'

export type Params = {
	url: ApiUrls
	page?: number
}

type ApiResponse<T> = {
	data: T[],
	success: boolean
}

const api = (
	axios.create({
		baseURL: 'https://rickandmortyapi.com/api/',
	})
)

export const getDataApi =  <T>(params: Params, callback: (response: ApiResponse<T>) => void) => {
	const { url, ...queryParams } = params;

	api.get<Response<T>>(`/${url}`, { 
		params: queryParams
	})
		.then((res) => {
			callback({ data: res.data.results, success: true});
		})
		.catch(e => {
			console.log(e);
			callback({ data: [] as T[], success: false});
		})
}
