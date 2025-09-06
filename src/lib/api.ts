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

    const json = await response.json();

    // Normalize the response
    const photos = Array.isArray(json.data)
      ? json.data
      : Array.isArray(json.files)
      ? json.files
      : [];

    const hasMore =
      typeof json.hasMore === "boolean"
        ? json.hasMore
        : photos.length > 0;

    return { data: photos, hasMore };
  } catch (error) {
    console.log(error);
    return { data: [], hasMore: false }; 
  }
};
