import React from 'react';
import { connect } from 'react-redux';

import { fetchFollowedPosts } from '../actions';

class WatchList extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.followedMessages === this.props.followedMessages) {
      this.props.fetchFollowedPosts(this.props.followedSymbols);
    }
  }

  renderList = () => {
    return this.props.followedMessages.map(msg => {
      return (
        <li className='list-group-item comment' key={msg.id}>
          <div className='comment-user-info'>
            <img src={msg.user.avatar_url} alt='user-1' />
            <a href='#'>{msg.user.name}</a>
          </div>
          <div className='comment-comment-info'>
            <p>{msg.body}</p>
            <span className='comment-time'>{msg.created_at}</span>
          </div>
        </li>
      );
    });
  };

  render() {
    if (this.props.followedSymbols.length === 0) {
      return null;
    }
    return (
      <div className='second-col list-group'>
        <span>Following: {this.props.followedSymbols}</span>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followedSymbols: state.stocks.followedSymbols,
  followedMessages: state.stocks.followedMessages
});

export default connect(
  mapStateToProps,
  { fetchFollowedPosts }
)(WatchList);
