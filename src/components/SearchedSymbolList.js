import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddCard from './AddCard';

class SearchedSymbolList extends Component {
  render() {
    return <AddCard />;
  }
}

const mapStateToProps = state => ({
  searched: state.stocks.searchedSymbols
});
export default connect(mapStateToProps)(SearchedSymbolList);

// const symbols = this.props.searched.map(sym => {
//   return <span>{sym}</span>;
// });
