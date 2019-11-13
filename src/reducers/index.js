import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import stocksReducer from './stocksReducer';

export default combineReducers({
  stocks: stocksReducer,
  form: formReducer
});
