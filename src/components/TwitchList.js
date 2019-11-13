import React from 'react';
import WatchList from './WatchList';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

export class TwitchList extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.tweets) !== JSON.stringify(this.props.tweets)
    ) {
      try {
        setInterval(async () => {
          this.props.fetchPosts(this.props.symbol);
        }, 60000);
      } catch (e) {
        console.log(e);
      }
    }
  }

  renderTweets() {
    return this.props.tweets.map(tweet => {
      return (
        <li className='list-group-item comment' key={tweet.id}>
          <div className='comment-user-info'>
            <img src={tweet.user.avatar_url} alt='user1' />
            <a href='#'>{tweet.user.name}</a>
          </div>
          <div className='comment-comment-info'>
            <p>{tweet.body}</p>
            <span className='comment-time'>{tweet.created_at}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    if (this.props.tweets.length > 0) {
      return (
        <main className='main-content'>
          <div className='first-col list-group'>
            <span>Displaying {this.props.tweets.length} results</span>
            <ul>{this.renderTweets()}</ul>
          </div>
          <WatchList />
        </main>
      );
    } else {
      return (
        <div className='flex-box-nothing'>
          <i class='far fa-question-circle'></i>
          <p>Not seeing anything? Perform a Search</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  tweets: state.stocks.messages,
  symbol: state.stocks.symbol
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(TwitchList);
