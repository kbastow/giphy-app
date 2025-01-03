import React from 'react';
import { AppProvider } from './context/AppContext';
import GifGrid from './components/GifGrid';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <SearchBar />
        <GifGrid />
      </div>
    </AppProvider>
  );
};

export default App;
