import React from 'react'
import apple_tv from '../../common/images/icons/apple-tv-logo.png'
import banker from '../../common/images/home/banker.png'
import watch from '../../common/images/icons/watch-series5-logo.png'
import LinkWrap from './LinkWrap'

function Fifth() {
  return (
    <div>
      <section class="fifth-heghlight-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="left-side-wrapper col-sm-12 col-md-6">
            <div class="left-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={apple_tv} />
                </div>
              </div>

              <div class="tvshow-logo-wraper">
                <img src={banker} />
              </div>

              <div class="watch-more-wrapper">
                <a href="#">Watch now on the Apple TV App</a>
              </div>
            </div>
          </div>
          <div class="right-side-wrapper col-sm-12 col-md-6">
            <div class="right-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={watch} />
                </div>
              </div>
              <div class="description-wraper">
                With the Always-On Retina display.<br />
                You’ve never seen a watch like this.
              </div>

              <LinkWrap linkName="Learn more" linkName1="Buy"/>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Fifth