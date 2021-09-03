import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
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
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
      <Title />
      <Search />
      <SearchName />
      <Table />
      <Description />
      <Footer />
    </Router>
  );
}

export default App;
