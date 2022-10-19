import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  }

  capitalFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults : 0
     }
     document.title = `${this.capitalFirstLetter(this.props.category)} - NewsApp` 
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  componentDidMount = async () => {
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  fetchMoreData = async () => {  
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
    })
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsApp - top {this.capitalizeFirstletter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner />}

          <div className="row mb-4" >

            {!this.state.loading && this.state.articles.map((elem) => {
              return <div className="col-md-4" key={elem.url}>
                <NewsItem title={elem.title ? elem.title.slice(0, 45) : ""} discription={elem.description ? elem.description.slice(0, 105) : ""}
                  imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name} />
              </div>
            })}

          </div>
        </div>
        {/* <div className="container d-flex justify-content-between mb-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-lg btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-lg btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div> */}
      </>
    )
  }
}
