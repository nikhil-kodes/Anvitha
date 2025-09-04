

export const fetchPhotos = async (skip) => {
	try {
		const response = await fetch(`${import.meta.env.BACKEND_URI}?skip=${skip}`);

		// if (!response.ok) {
		// 	throw new error("Failed to fetch Photos");
		// }
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
		return { files: [], hasMore: false };
	}
};
