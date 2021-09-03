import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Main/Title';
import Search from './components/Search/Search';
import Table from './components/Main/Table';

import Description from './components/Main/Description';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <Search />
      <Table />
      <Description />
    </div>
  );
}

export default App;
