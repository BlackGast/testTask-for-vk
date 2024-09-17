import React, { useEffect, useState } from 'react';
import CatCard from './CatCard';
import { getFavoriteCats, removeFavoriteCat } from '../api/catApi';

const FavoriteCats: React.FC = () => {
  const [favoriteCats, setFavoriteCats] = useState<string[]>([]);

  useEffect(() => {
    getFavoriteCats().then(setFavoriteCats);
  }, []);

  const handleToggleFavorite = (catId: string) => {
    removeFavoriteCat(catId).then(() => {
      setFavoriteCats((prev) => prev.filter((id) => id !== catId));
    });
  };

  return (
    <div>
      <h1>Избранные котики</h1>
      <div className="cat-list">
        {favoriteCats.map((catId) => (
          <CatCard
            key={catId}
            id={catId}
            imageUrl={`https://cdn2.thecatapi.com/images/${catId}.jpg`}
            isFavorite={true}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCats;
