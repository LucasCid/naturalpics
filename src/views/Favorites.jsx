import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos, favorites, setFavorites } = useContext(PhotoContext);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const favoritePhotos = Array.isArray(photos)
    ? photos.filter((photo) => favorites.includes(photo.id))
    : [];

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.length > 0 ? (
          favoritePhotos.map((photo) => {
            const { id, src, title } = photo;
            const imageUrl = src?.medium || "fallback-image-url.jpg"; // Provide a fallback image URL

            return (
              <div key={id} className="photo">
                <img src={imageUrl} alt={title} />
                <IconHeart
                  filled={favorites.includes(id)}
                  onClick={() => toggleFavorite(id)}
                />
              </div>
            );
          })
        ) : (
          <p>No hay fotos favoritas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
