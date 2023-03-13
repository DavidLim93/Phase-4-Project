import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import GameContainer from './GameContainer';
import GameCard from './GameCard';
import { BrowserRouter as Switch, Route } from "react-router-dom";




function App() {





  return (

      <Switch>
        <div className="App">
        <h1 className="heading">Game Reviews</h1>
        <Navbar/>
        {/* <GameContainer/> */}
        <Route path="/games" component={GameContainer} />
        <Route path="/game/:id" component={GameCard}/>
        </div>
      </Switch>


      // <div className="App">
      //   <h1 className="heading">Game Reviews</h1>
      //   <Navbar />
      //   {/* <GameContainer /> */}
      // </div>  
   
  );
}

export default App;
