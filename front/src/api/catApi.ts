const API_URL = 'http://localhost:4000';

export const getAllCats = async (): Promise<string[]> => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  const data = await response.json();
  return data.map((cat: { id: string }) => cat.id);
};

export const getFavoriteCats = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/likes`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  const { data } = await response.json();
  return data.map((like: { cat_id: string }) => like.cat_id);
};

export const addFavoriteCat = async (catId: string): Promise<void> => {
  await fetch(`${API_URL}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ cat_id: catId })
  });
};

export const removeFavoriteCat = async (catId: string): Promise<void> => {
  await fetch(`${API_URL}/likes/${catId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
};
