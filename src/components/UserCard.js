import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    return (
      <div className='card' style={{ width: '18rem' }}>
        <img src='images/user-1.jpg' className='card-img-top' alt='user-1' />
        <div className='card-body'>
          <div>
            <p className='name'>Jay Gatsby</p>
            <span className='username'>@oldsport</span>
          </div>
          <p className='card-text'>“I like green lights”</p>
        </div>
        <div className='card-stats'>
          <div className='stat-tweets'>
            <p className='stat-num'>527</p>
            <p className='stat-title'>Tweets</p>
          </div>
          <div className='stat-tweets'>
            <p className='stat-num'>328</p>
            <p className='stat-title'>Following</p>
          </div>
          <div className='stat-tweets'>
            <p className='stat-num'>897</p>
            <p className='stat-title'>Followers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
