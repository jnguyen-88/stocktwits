import React from 'react';
import { connect } from 'react-redux';

import SearchedSymbolList from './SearchedSymbolList';
import { fetchPosts, searchStock, followSymbol } from '../actions';

export class Search extends React.Component {
  onChange = e => {
    this.props.searchStock(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchPosts(this.props.symbol);
    document.getElementById('search-form').reset();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='searchText'
              placeholder='Search Symbol'
              autoComplete='off'
              onChange={this.onChange}
            />
            <button>Submit</button>
          </div>
        </form>
        <SearchedSymbolList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  symbol: state.stocks.symbol
});

export default connect(
  mapStateToProps,
  { fetchPosts, searchStock, followSymbol }
)(Search);
