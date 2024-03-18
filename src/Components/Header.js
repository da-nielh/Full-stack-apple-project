import React, { Component } from 'react';
import appleLogo from '../common/images/icons/logo-sm.png';
import searchIcon from '../common/images/icons/search-icon-sm.png';
import cartIcon from '../common/images/icons/cart-sm.png';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const data = [
      {
        link:"/mac", 
        name:"Mac" 
      },
      {
        link:"/iPhone", 
        name:"iPhone" 
      },
      {
        link:"/iPad", 
        name:"iPad" 
      },
      {
        link:"/Watch", 
        name:"Watch" 
      },
      {
        link:"/tv", 
        name:"tv" 
      },
      {
        link:"/Music", 
        name:"Music" 
      },
      {
        link:"/Support", 
        name:"Support" 
      },
      {
        link:"/search/", 
        name:<img src={searchIcon} alt="Search Icon" />
      },
      {
        link:"/cart/", 
        name:<img src={cartIcon} alt="Cart Icon" />
      },
    ]
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <Link className="navbar-brand mx-auto" to="/">
                <img src={appleLogo} alt="Apple Logo" />
              </Link>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  {data.map((info, index) => (<HeaderLink key={index} link={info.link} name={info.name} />))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
