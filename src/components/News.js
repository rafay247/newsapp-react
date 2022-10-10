import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Missy Ryan, Jennifer Hassan, Isabelle Khurshudyan, Rachel Pannett, Nick Parker",
      "title": "Ukraine live updates: Explosions in Kyiv as strikes hit across Ukraine; Putin convenes his Security Council - The Washington Post",
      "description": "Strikes hit Kyiv, Zaporizhzhia, Kharkiv and other cities. Russian President Vladimir Putin is calling his Security Council after the Crimean bridge explosion.",
      "url": "https://www.washingtonpost.com/world/2022/10/10/russia-ukraine-war-latest-updates/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTC3FNFA2QI35YZG3UEQB2J4AE.JPG&w=1440",
      "publishedAt": "2022-10-10T08:22:00Z",
      "content": "Ukraines national police reported five deaths and 12 injuries in the massive shelling of Kyiv Monday morning, saying most of the cases were in the center of the capital. \r\nInformation on casualties w… [+483 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "Hyung-jin Kim",
      "title": "NKorea confirms simulated use of nukes to 'wipe out' enemies - The Associated Press",
      "description": "SEOUL, South Korea (AP) — North Korea’s recent barrage of missile launches  were the simulated use of its tactical battlefield nuclear weapons to “hit and wipe out” potential South Korean and U.S.",
      "url": "https://apnews.com/6ce0a8da47f8eb9228d4b33223ebfa3b",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/447a9a55d422461c9d9b28c688466d9e/2111.jpeg",
      "publishedAt": "2022-10-10T07:52:30Z",
      "content": "SEOUL, South Korea (AP) North Koreas recent barrage of missile launches were the simulated use of its tactical battlefield nuclear weapons to hit and wipe out potential South Korean and U.S. targets,… [+6242 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Ariana Brockington",
      "title": "Jimmy Kimmel says 5-year-old son Billy ‘has almost no interest’ in learning about his heart surgeries - Yahoo News",
      "description": "Jimmy Kimmel is sharing an update on his 5-year-old son Billy Kimmel's health following multiple heart surgeries.",
      "url": "https://news.yahoo.com/jimmy-kimmel-says-5-old-052514191.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/aSpiyMtwxFoOYFIharGJxg--~B/aD0xMzUwO3c9MTA4MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/nbc_today_217/443d5b2c5a13b451495453b5cd21e4a2",
      "publishedAt": "2022-10-10T05:30:58Z",
      "content": "Jimmy Kimmel is sharing an update on his 5-year-old son Billys health following multiple heart surgeries.\r\nOn Saturday, Oct. 8, the comedian and his wife, former Jimmy Kimmel Live! writer Molly McNea… [+3188 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Landon Mion",
      "title": "Dem city council member says Blue Angels should be banned from flying over San Francisco - Fox News",
      "description": "A San Francisco Democrat city council member said Sunday that the U.S. Navy Blue Angels should not be allowed in the city's airspace. The squadron's performance was canceled due to fog.",
      "url": "https://www.foxnews.com/us/dem-city-council-member-says-blue-angels-should-banned-flying-over-san-francisco",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/04/blue-angles-1-US-NAVY.jpg",
      "publishedAt": "2022-10-10T05:03:06Z",
      "content": "The Blue Angels' scheduled show in San Francisco, California, for Fleet Week was canceled Sunday due to weather conditions, and a Democrat city council member suggested the planes not be permitted in… [+1570 chars]"
    }
  ]
  constructor() {
    super()
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className='my-4'>News App - top headlines</h1>
        {this.state.articles.map(() => {
          return <div className="row mb-5">
            <div className="col-md-4">
              <NewsItem title="mytiltle" discription="mydes" imageUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTC3FNFA2QI35YZG3UEQB2J4AE.JPG&w=1440" />
            </div>
          </div>
        })}

      </div>
    )
  }
}
