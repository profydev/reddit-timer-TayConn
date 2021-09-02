import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Main/Title';
import Search from './components/Search/Search';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <Search />
    </div>
  );
}

export default App;
