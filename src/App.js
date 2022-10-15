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
          <Route exact path= "/" element = {<News key = "general" pageSize = {5} country = "us" category = "general" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/>
          <Route exact path= "/business" element = {<News key = "business" pageSize = {5} country = "us" category = "business" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/> 
          <Route exact path= "/entertainment" element = {<News key = "entertainment" pageSize = {5} country = "us" category = "entertainment" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/>
          <Route exact path= "/general" element = {<News key = "general" pageSize = {5} country = "us" category = "general" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />} /> 
          <Route exact path= "/health" element = {<News key = "health" pageSize = {5} country = "us" category = "health" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/> 
          <Route exact path= "/science" element = {<News key = "science" pageSize = {5} country = "us" category = "science" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/>
          <Route exact path= "/sports" element = {<News key = "sports" pageSize = {5} country = "us" category = "sports" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/> 
          <Route exact path= "/technology" element = {<News key = "technology" pageSize = {5} country = "us" category = "technology" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2" />}/> 
        </Routes>
          
        </Router>
      </div>
    )
  }
}
