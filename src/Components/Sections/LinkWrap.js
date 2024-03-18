import React, { Component } from 'react'

 class LinkWrap extends Component {
  render() {
    
    let {linkName, linkName1} = this.props
    return (
      <div class="links-wrapper">
          <ul>
            <li><a href="#">{linkName}</a></li>
            <li><a href="#">{linkName1}</a></li>
          </ul>
        </div>
    )
  }
}
export default LinkWrap