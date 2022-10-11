import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = []
  constructor() {
    super()
    this.state = {
      articles: this.articles,
      loading: false,
      pagee: 1
    }
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbfdd9ebf09a476bb8d34b8ca66ae9c2&page=${page}`
    let data = await fetch(url);
    let dataParse = await data.json();
    this.setState({
      page: this.stat.page + 1,
      articles: dataParse.articles
    })

  }
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbfdd9ebf09a476bb8d34b8ca66ae9c2&page=${page}`
    let data = await fetch(url);
    let dataParse = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: dataParse.articles
    })

  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className='my-4'>NewsApp - Top headlines</h1>
          <div className="row mb-4" >
            {this.state.articles.map((elem) => {
              return <div className="col-md-4" key={elem.url}>
                <NewsItem title={elem.title ? elem.title.slice(0, 35) : ""} discription={elem.description ? elem.description.slice(0, 85) : ""} imageUrl={elem.urlToImage} newsUrl={elem.url} />
              </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-sm btn-dark" onClick={handlePrev}>&laquo, previous</button>
          <button type="button" className="btn btn-sm btn-dark" onClick={handleNext}>&raquo, next</button>
        </div>
      </>
    )
  }
}
