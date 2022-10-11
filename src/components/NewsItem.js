import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://s.yimg.com/uu/api/res/1.2/aSpiyMtwxFoOYFIharGJxg--~B/aD0xMzUwO3c9MTA4MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/nbc_today_217/443d5b2c5a13b451495453b5cd21e4a2": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href={newsUrl} target = "_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
