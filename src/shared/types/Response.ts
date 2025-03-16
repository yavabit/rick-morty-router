export type Response<T> = {
	results: T[]
	success: boolean
}

export type CharacterType = {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	image: string
	created: string
}

export type EpisodeType = {
	id: number
	name: string
	air_date: string
	episode: string
	created: string
}

export type LocationType = {
	id: number
	name: string
	type: string
	dimension: string
	created: string
}