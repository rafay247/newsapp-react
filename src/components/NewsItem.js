import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, discription} = this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTC3FNFA2QI35YZG3UEQB2J4AE.JPG&w=1440" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
