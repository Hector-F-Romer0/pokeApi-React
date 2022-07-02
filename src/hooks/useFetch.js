import { useEffect, useState } from "react";

export const useFetch = (url, target) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await fetch(url)
				.then((res) => res.json())
				.then((data) => setData(data))
				.catch((e) => setError(`Error al realizar el Fetch: ${e}`))
				.finally(setLoading(false));
		};
		fetchData();
	}, [target]);

	return { data, error, loading };
};
