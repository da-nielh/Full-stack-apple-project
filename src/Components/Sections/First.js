import React from 'react'
import LinkWrap from './LinkWrap'

function First() {
  return (
    <div>
      <section class="first-hightlight-wrapper">
      <div class="container">
        <div class="new-alert">New</div>

        <div class="title-wraper bold black">iPad Pro</div>

        <LinkWrap linkName="Learn more" linkName1="Order"/>

        <div class="ipod-caption row">
          <div class="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div class="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default First