import React from 'react'
import LinkWrap from './LinkWrap'

function Second() {
  return (
    <div>
      <section class="second-hightlight-wrapper">
      <div class="container">
        <div class="new-alert">New</div>

        <div class="title-wraper bold black">MacBook Air</div>

        <div class="description-wrapper black">
          Twice the speed. Twice the storage.
        </div>

        <div class="price-wrapper grey">From $999.</div>

        <LinkWrap linkName="Learn more" linkName1="Buy"/>
      </div>
    </section>
    </div>
  )
}

export default Second