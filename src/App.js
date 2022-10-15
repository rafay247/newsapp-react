import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path= "/"><News pageSize = {5} country = "us" category = "general" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/business"><News pageSize = {5} country = "us" category = "business" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/entertainment"><News pageSize = {5} country = "us" category = "entertainment" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/general"><News pageSize = {5} country = "us" category = "general" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/health"><News pageSize = {5} country = "us" category = "health" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/science"><News pageSize = {5} country = "us" category = "science" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/sports"><News pageSize = {5} country = "us" category = "sports" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
          <Route exact path= "/technology"><News pageSize = {5} country = "us" category = "technology" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" /> </Route>
        </Routes>
          
        </Router>
      </div>
    )
  }
}
