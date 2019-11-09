import React from 'react';
import { connect } from 'react-redux';

class WatchList extends React.Component {
  renderList() {
    return this.props.followedSymbol.map(sym => {
      return <div>{sym}</div>;
    });
  }
  render() {
    if (this.props.followedSymbol.length === 0) {
      return <p>Nothing here</p>;
    }
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({
  followedSymbol: state.stocks.followedSymbols
});

export default connect(mapStateToProps)(WatchList);
