import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "17rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href={newsUrl} target = "_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
