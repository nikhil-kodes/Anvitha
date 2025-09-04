import React, { useState, useEffect, useCallback, useRef } from "react";
import { fetchPhotos } from "@/lib/api";

const EventGallery = () => {
	const [photos, setPhotos] = useState([]);
	const [skip, setSkip] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const loadPhotos = useCallback(async () => {
		if (loading || !hasMore) return;

		setLoading(true);
		const { files, hasMore: more } = await fetchPhotos(skip);

		setPhotos((prev) => [...prev, ...files]);
		setHasMore(more);
		setSkip((prev) => prev + files.length); // move skip forward
		setLoading(false);
	}, [skip, hasMore, loading]);

	useEffect(() => {
		loadPhotos();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
					document.documentElement.scrollHeight - 200 && // near bottom
				hasMore &&
				!loading
			) {
				loadPhotos();
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [hasMore, loading, loadPhotos]);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
			{photos.map((photo) => (
				<img
					key={photo.fileId}
					src={photo.url}
					alt={photo.name}
					className="w-full h-48 object-cover rounded-lg shadow"
				/>  
			))}

			{loading && <p className="col-span-full text-center">Loading...</p>}
			{!hasMore && (
				<p className="col-span-full text-center text-gray-500">
					No more images
				</p>
			)}
		</div>
	);
};

export default EventGallery;
