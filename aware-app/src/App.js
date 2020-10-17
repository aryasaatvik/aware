import React from 'react';

import Container from 'react-bootstrap/Container';

import './App.css';
import ArticleForm from './components/ArticleForm';
import Header from './components/Header';

function App() {
  return (
    <Container>
      <Header />
      <ArticleForm />
    </Container>
  );
}

export default App;
