import React from 'react';
import { AppProvider } from './context/AppContext';
import SearchBar from './components/SearchBar';
import GifGrid from './components/GifGrid';
import './App.css';

const App = () => (
  <AppProvider>
    <div className="app">
      <SearchBar />
      <GifGrid />
    </div>
  </AppProvider>
);

export default App;
