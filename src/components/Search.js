import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import SearchedSymbolList from './SearchedSymbolList';
import { fetchPosts, searchStock } from '../actions';

export class Search extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      );
    }
  };

  // Show Redux-Form Input
  renderInput = ({ input, meta }) => {
    return (
      <React.Fragment>
        <div className='form-group'>
          <input
            {...input}
            autoComplete='off'
            placeholder='Search Symbol (e.g AAPL)'
            className='form-control'
          />
        </div>
        {this.renderError(meta)}
      </React.Fragment>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.fetchPosts(formValues.search);
    this.props.searchStock(formValues.search);
    document.getElementById('search-form').reset();
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          id='search-form'
        >
          <Field name='search' component={this.renderInput} />
        </form>
        <SearchedSymbolList />
      </React.Fragment>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.search) {
    errors.search = 'You must enter a symbol';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'search',
  validate
})(Search);

export default connect(
  null,
  { fetchPosts, searchStock }
)(formWrapped);
