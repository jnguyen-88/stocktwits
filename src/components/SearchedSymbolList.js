import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddCard from './AddCard';

class SearchedSymbolList extends Component {
  render() {
    if (this.props.searched.length > 0) {
      return (
        <div className='searched-box'>
          <span>Click a symbol to save to your Watchlist</span>
          <div>
            <AddCard />
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  searched: state.stocks.searchedSymbols
});
export default connect(mapStateToProps)(SearchedSymbolList);
