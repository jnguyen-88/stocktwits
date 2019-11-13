import React from 'react';
import { connect } from 'react-redux';
import { followSymbol, removeSearchedSymbol, unfollowSymbol } from '../actions';

export class AddCard extends React.Component {
  renderSymbol = () => {
    return this.props.searched.map(symbol => {
      return (
        <div key={symbol}>
          <button
            type='button'
            className='btn btn-info'
            onClick={() => {
              this.props.followSymbol(symbol);
              if (this.props.followedSymbols.length > 0) {
                this.props.unfollowSymbol(symbol);
              }
            }}
          >
            {symbol}
          </button>
        </div>
      );
    });
  };
  render() {
    if (this.props.searched.length === 0) {
      return null;
    }
    return this.renderSymbol();
  }
}

const mapStateToProps = state => ({
  searched: state.stocks.searchedSymbols,
  followedSymbols: state.stocks.followedSymbols
});

export default connect(
  mapStateToProps,
  { followSymbol, removeSearchedSymbol, unfollowSymbol }
)(AddCard);
