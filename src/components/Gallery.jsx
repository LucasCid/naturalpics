import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";
import '../App.css'

const Gallery = () => {
  const { photos, favorites, setFavorites } = useContext(PhotoContext);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };
  return (
    <div className="gallery grid-columns-4 p-3 hola">
      {Array.isArray(photos) && photos.length > 0 ? (
        photos.map((photo) => {
          const { id, src, title } = photo;
          const imageUrl = src?.medium || "fallback-image-url.jpg"; // Provide a fallback image URL

          return (
            <div key={id} className="photo hola">
              <img src={imageUrl} alt={title} />
              <IconHeart
                filled={favorites.includes(id)}
                onClick={() => toggleFavorite(id)}
              />
            </div>
          );
        })
      ) : (
        <p>No hay fotos disponibles</p>
      )}
    </div>

  );
};
export default Gallery;


