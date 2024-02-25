import './App.css'
// import React from 'react';
import Navbar from './components/Navbar'
import Grid from './components/Grid';
import Card from './components/Card';
import {data} from './data';

function App() {

    const cards = data.map(item => {
      return(
        <Card
        img = {item.img}
        rating = {item.rating}
        reviews = {item.reviews}
        location = {item.location}
        desc = {item.desc}
        price = {item.price}
        status = {item.status}
        />

      )
    })

  return (
    <>
        <Navbar/>
        <Grid/>
     
     <div className='main-cards'>
        {cards}
     </div>
  
    </>
  );
}

export default App;
