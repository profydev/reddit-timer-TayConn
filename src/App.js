import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import './app.css';
import theme from './Theme';
import Header from './components/Header/Header';
import Title from './components/Main/Title';
import Search from './components/Search/Search';
import SearchName from './components/Search/SearchName';
import Table from './components/Main/Table';
import Description from './components/Main/Description';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/search" />
          <Route path="/" />
        </Switch>
        <Title />
        <Search />
        <SearchName />
        <Table />
        <Description />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
