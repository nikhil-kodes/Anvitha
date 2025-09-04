import React, { useState, useEffect, useCallback } from "react";
import { fetchPhotos } from "@/lib/api";

const Orientation = () => {
  const [photos, setPhotos] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadPhotos = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const { data, hasMore: more } = await fetchPhotos(skip);
    console.log(data, hasMore);
    setPhotos((prev) => [...prev, ...data]);
    setHasMore(more);
    setSkip((prev) => prev + data.length); // move skip forward
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

  const [selectedIndex, setSelectedIndex] = useState(null);
  const openPhoto = (index) => {
    setSelectedIndex(index);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const showNext = () => {
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="relative bg-black bg-opacity-70">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {photos.map((photo, index) => (
          <img
            key={photo.fileId}
            src={photo.thumbnail}
            alt={photo.name}
            onClick={() => openPhoto(index)}
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
      {selectedIndex !== null && (
  <div className="fixed top-16 inset-0 bg-black bg-opacity-95 flex items-center justify-center z-1000">
    <button
      onClick={closePhoto}
      className="absolute top-4 right-4 text-white text-3xl"
    >
      ✕
    </button>

    <button
      onClick={showPrev}
      className="absolute left-4 text-white text-3xl"
      disabled={selectedIndex === 0}
    >
      ◀
    </button>

    <img
      src={photos[selectedIndex].url}
      alt={photos[selectedIndex].name}
      className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
    />

    <button
      onClick={showNext}
      className="absolute right-4 text-white text-3xl"
      disabled={selectedIndex === photos.length - 1}
    >
      ▶
    </button>
  </div>
)}

    </div>
  );
};

export default Orientation;
