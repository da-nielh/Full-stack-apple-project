import React from 'react'
import arcada from '../../common/images/icons/arcade.png'
import LinkWrap from './LinkWrap'

function Sixth() {
  return (
    <div>
      <section class="sixth-heghlight-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="left-side-wrapper col-sm-12 col-md-6">
            <div class="left-side-container">
              <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                  <img src={arcada} />
                </div>
              </div>
              <div class="description-wraper white">
                Agent 8 is a small hero on a big mission.
              </div>
              
              <LinkWrap linkName="Play now" linkName1="Learn about Apple Arcade"/>

            </div>
          </div>
          <div class="right-side-wrapper col-sm-12 col-md-6">
            <div class="right-side-container">
              <div class="title-wraper">Apple Card Monthly Installments</div>
              <div class="description-wraper">
                Pay for your next iPhone over time, interest-free with Apple
                Card.
              </div>
              
              <LinkWrap linkName="Learn more" linkName1="Apply now"/>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Sixth