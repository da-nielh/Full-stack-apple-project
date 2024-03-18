import React from 'react'
import LinkWrap from './LinkWrap'

function Third() {
  return (
    <div>
      <section class="third-hightlight-wrapper">
      <div class="container">
        <div class="title-wraper bold">iPhone 11 Pro</div>

        <div class="description-wrapper">
          Pro cameras. Pro display. Pro performance.
        </div>

        <div class="price-wrapper">From $24.95/mo. or $599 with trade‑in.</div>

        <LinkWrap linkName="Learn more" linkName1="Buy"/>
        
      </div>
    </section>
    </div>
  )
}

export default Third