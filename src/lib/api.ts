export const fetchPhotos = async (skip) => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URI}?skip=${skip}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		// if (!response.ok) {
		// 	throw new error("Failed to fetch Photos");
		// }
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
		return { files: [], hasMore: false };
	}
};
