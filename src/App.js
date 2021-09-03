import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Main/Title';
import Search from './components/Search/Search';
import SearchName from './components/Search/SearchName';
import Table from './components/Main/Table';
import Description from './components/Main/Description';
import Footer from './components/Footer/Footer';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <Search />
      <SearchName />
      <Table />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
