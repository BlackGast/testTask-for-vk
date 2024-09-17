import React, { useState } from 'react';
import AllCats from './components/AllCats';
import FavoriteCats from './components/FavoriteCats';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('all')}>Все котики</button>
        <button onClick={() => setActiveTab('favorites')}>Избранные котики</button>
      </nav>
      {activeTab === 'all' ? <AllCats /> : <FavoriteCats />}
    </div>
  );
};

export default App;
