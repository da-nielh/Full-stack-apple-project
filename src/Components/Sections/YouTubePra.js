import React, {useEffect, useState} from 'react'

function YouTubePra() {
    const [YouTubeVideos, setVideo] = useState([]);
    useEffect(() => {
        fetch(
       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBLbaDhqkQxYYNBMC2i49WHybInsV22eIE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet"
        )
        .then((response) => response.json())
        .then((data) => {
            const YouTubeVideosData = data.items;
            setVideo(YouTubeVideosData)
        })
    }, [])

    // console.log(YouTubeVideos);
    
  return (
    <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                <br />
                Latest Videos <br />
                <br />
              </div>
              <div className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          The next generation of portraits on iPhone 15. #Shorts
                        </a>
                      </div>
                      <div className="videoDesc">
                        Learn all the exciting news that makes this the most impressive iPhone lineup ever and find a new iPhone 15 that's right for you.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          Some title
                        </a>
                      </div>
                      <div className="videoDesc">
                        Some description
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          Some title
                        </a>
                      </div>
                      <div className="videoDesc">
                        Some description
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          Some title
                        </a>
                      </div>
                      <div className="videoDesc">
                        Some description
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          Some title
                        </a>
                      </div>
                      <div className="videoDesc">
                        Some description
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          Some title
                        </a>
                      </div>
                      <div className="videoDesc">
                        Some description
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default YouTubePra