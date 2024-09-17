import React, { useEffect, useState } from 'react';
import CatCard from './CatCard';
import { getAllCats, addFavoriteCat, removeFavoriteCat, getFavoriteCats } from '../api/catApi';

const AllCats: React.FC = () => {
  const [cats, setCats] = useState<string[]>([]);
  const [favoriteCats, setFavoriteCats] = useState<string[]>([]);

  useEffect(() => {
    getAllCats().then(setCats);
    getFavoriteCats().then(setFavoriteCats);
  }, []);

  const handleToggleFavorite = (catId: string) => {
    if (favoriteCats.includes(catId)) {
      removeFavoriteCat(catId).then(() => {
        setFavoriteCats((prev) => prev.filter((id) => id !== catId));
      });
    } else {
      addFavoriteCat(catId).then(() => {
        setFavoriteCats((prev) => [...prev, catId]);
      });
    }
  };

  return (
    <div>
      <h1>Все котики</h1>
      <div className="cat-list">
        {cats.map((catId) => (
          <CatCard
            key={catId}
            id={catId}
            imageUrl={`https://cdn2.thecatapi.com/images/${catId}.jpg`}
            isFavorite={favoriteCats.includes(catId)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCats;
