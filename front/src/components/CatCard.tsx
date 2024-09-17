import React from 'react';

interface CatCardProps {
  id: string;
  imageUrl: string;
  isFavorite: boolean;
  onToggleFavorite: (catId: string) => void;
}

const CatCard: React.FC<CatCardProps> = ({ id, imageUrl, isFavorite, onToggleFavorite }) => {
  return (
    <div className="cat-card">
      <img src={imageUrl} alt="Cat" />
      <button onClick={() => onToggleFavorite(id)}>
        {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};

export default CatCard;
