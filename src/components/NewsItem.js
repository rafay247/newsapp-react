import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <img src={!imageUrl ? "https://static.foxnews.com/foxnews.com/content/uploads/2020/04/blue-angles-1-US-NAVY.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {date}</small></p> 
            <a href={newsUrl} target = "_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
