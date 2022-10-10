import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1 className='my-4'>News App - top headlines</h1>

        <div className="row">

          <div className="col-md-4">
            <NewsItem title="mytiltle" description="mydes" />
          </div>

          <div className="col-md-4">
            <NewsItem title="mytiltle" description="mydes" />
          </div>

          <div className="col-md-4">
            <NewsItem title="mytiltle" description="mydes" />
          </div>
          
        </div>
      </div>
    )
  }
}
