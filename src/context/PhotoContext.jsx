/* eslint-disable react/prop-types */
 import { createContext, useState, useEffect } from "react";
 import photosData from "../../public/photos.json"; // Importa el archivo JSON
 export const PhotoContext = createContext();
 export const PhotoProvider = ({ children }) => {
   const [photos, setPhotos] = useState([]);
   const [favorites, setFavorites] = useState([]);
   useEffect(() => {
     // Simplemente usa los datos importados
     setPhotos(Array.isArray(photosData.photos) ? photosData.photos : []);
   }, []);
   return (
     <PhotoContext.Provider value={{ photos, favorites, setFavorites }}>
       {children}
     </PhotoContext.Provider>
   );
 };









