import React from 'react';
import WatchList from './WatchList';
import { connect } from 'react-redux';
import twits from '../api/twits';

export class TwitchList extends React.Component {
  renderTweets() {
    return this.props.tweets.map(tweet => {
      return (
        <li className='list-group-item' key={tweet.id}>
          {tweet.body}
        </li>
      );
    });
  }

  render() {
    return (
      <div className='flex-box'>
        <div className='first-col list-group'>{this.renderTweets()}</div>
        <WatchList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tweets: state.stocks.messages,
  mySymbols: state.stocks.mySymbols
});

export default connect(mapStateToProps)(TwitchList);
