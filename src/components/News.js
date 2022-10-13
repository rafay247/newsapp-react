import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbfdd9ebf09a476bb8d34b8ca66ae9c2&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbfdd9ebf09a476bb8d34b8ca66ae9c2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }
  handleNext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbfdd9ebf09a476bb8d34b8ca66ae9c2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className='my-4 text-center'>NewsApp - Top headlines</h1>
          {this.state.loading && <Spinner />}

          <div className="row mb-4" >

            {!this.state.loading && this.state.articles.map((elem) => {
              return <div className="col-md-4" key={elem.url}>
                <NewsItem title={elem.title ? elem.title.slice(0, 35) : ""} discription={elem.description ? elem.description.slice(0, 105) : ""}
                  imageUrl={elem.urlToImage} newsUrl={elem.url} />
              </div>
            })}

          </div>
        </div>
        <div className="container d-flex justify-content-between mb-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-lg btn-dark" onClick={this.handleNext}> Next &rarr;</button>
        </div>
      </>
    )
  }
}
