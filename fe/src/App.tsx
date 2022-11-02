import React from 'react';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App page__content">
      <Header />
      <main className="page__main"></main>
      <Footer />
    </div>
  );
}

export default App;
