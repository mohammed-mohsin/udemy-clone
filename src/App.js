import React, { useState } from 'react';
import './App.css';
import "./bootstrap.min.css"
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([])
  const handleAddCart = (card) => {
    const newCard = [...cart, card]
    setCart(newCard)

  }
  return (
    <div className="">
      <Header cart={cart} ></Header>
      <Hero></Hero>
      <Main handleAddCart={handleAddCart}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
