import React from 'react';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { CardMobile } from './components/cardMobile/CardMobile';

function App() {
  return (
    <div className="App page__content">
      <Header />
      <CardMobile />
      <main className="page__main"></main>
      <Footer />
    </div>
  );
}

export default App;
