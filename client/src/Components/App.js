import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import GameContainer from './GameContainer';
import GameCard from './GameCard';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";






function App() {

  


  return (

      // <Switch>
      //   <div className="App">
      //   <h1 className="heading">Game Reviews</h1>
      //   <Navbar/>
      //   {/* <GameContainer/> */}
      //   <Route path="/games" component={GameContainer} />
      //   <Route path="/game/:id" component={GameCard}/>
      //   </div>
      // </Switch>


      <div className="App">
        <h1 className="heading">Game Reviews</h1>
        {/* <Navbar /> */}
        <Home />
        <GameContainer />
      </div>  

    //   <Router>
    //   <Switch>
    //     <Header />
    //     <Navbar />
    //   {/* <Route path="/test">
    //         <Test />
    //       </Route> */}
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/games">
    //         <GameContainer />
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/register">
    //         <Register />
    //       </Route>
    //   </Switch>
    // </Router>
   
  );
}

export default App;
