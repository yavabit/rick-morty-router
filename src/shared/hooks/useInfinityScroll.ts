import { useEffect, useState } from "react";
import { ApiUrls, getDataApi } from "../../api/api";

export const useInfinityScroll = <T>(url: ApiUrls, pageNumber?: number) => {

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [data, setData] = useState<T[]>([])
	const [hasMore, setHasMore] = useState(false)

	useEffect(() => {
		setLoading(true)
		setError(false)

		getDataApi<T>({ url: url, page: pageNumber }, ({data, success}) => {
			if(success) {
				setData(prevState => {
					return [...new Set([...prevState, ...data])]
				})
				setHasMore(data.length > 0);
			} else {
				setHasMore(false);
			}
			setLoading(false)
		})

	}, [url, pageNumber])

	return {data, loading, error, hasMore};
};
