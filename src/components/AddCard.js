import React from 'react';
import { connect } from 'react-redux';
import { followSymbol, removeSearchedSymbol, unfollowSymbol } from '../actions';

export class AddCard extends React.Component {
  renderSymbol = () => {
    return this.props.searched.map(symbol => {
      return (
        <div key={symbol}>
          <li>{symbol}</li>
          <button
            onClick={() => {
              this.props.followSymbol(symbol);
              this.props.removeSearchedSymbol(symbol);
            }}
          >
            Add
          </button>
          {/* <button
            onClick={() => {
              this.props.unfollowSymbol(symbol);
            }}
          >
            Remove
          </button> */}
        </div>
      );
    });
  };
  render() {
    if (this.props.searched.length === 0) {
      return <div>Nothing searched</div>;
    }
    return <div className='second-col'>{this.renderSymbol()}</div>;
  }
}

const mapStateToProps = state => ({
  searched: state.stocks.searchedSymbols
});

export default connect(
  mapStateToProps,
  { followSymbol, removeSearchedSymbol, unfollowSymbol }
)(AddCard);

//=======Whats wrong with this?=======

// export class AddCard extends React.Component {
//   onAdd = sym => {
//     this.props.followSymbol(sym);
//     this.props.removeSearchedSymbol(sym);
//   };
//   renderSymbol = () => {
//     return this.props.searched.map(symbol => {
//       return (
//         <div key={symbol}>
//           <li>{symbol}</li>
//           <button onClick={this.onAdd(symbol)}>Add</button>
//         </div>
//       );
//     });
//   };
//   render() {
//     if (!this.props.searched) {
//       return <div>Nothing searched</div>;
//     }
//     return <div className='second-col'>{this.renderSymbol()}</div>;
//   }
// }

// const mapStateToProps = state => ({
//   searched: state.stocks.searchedSymbols
// });

// export default connect(
//   mapStateToProps,
//   { followSymbol, removeSearchedSymbol }
// )(AddCard);
