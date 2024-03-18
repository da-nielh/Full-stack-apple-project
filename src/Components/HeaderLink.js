import React, { Component } from 'react';
import '../common/css/styles.css'
import { Link } from 'react-router-dom';

class HeaderLink extends Component {
  render() {
    let {link, name} = this.props
    return (
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to={link}>
            {name}
          </Link>
        </li>
    );
  }
}

export default HeaderLink;