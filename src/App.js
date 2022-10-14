import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize = {5} country = "us" apiKey = "dbfdd9ebf09a476bb8d34b8ca66ae9c2"/>
      </div>
    )
  }
}
