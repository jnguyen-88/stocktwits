import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <i
              className='fas fa-comment-dollar'
              style={{ fontSize: '35px', color: '#ffff' }}
            ></i>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home<i className='fas fa-home'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Connect <i className='far fa-user'></i>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Discover<i className='fas fa-hashtag'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
