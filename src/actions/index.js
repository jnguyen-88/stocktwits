import twits from '../api/twits';

export const fetchPosts = symbol => async dispatch => {
  try {
    const results = await twits.get(`/${symbol}.json`, {
      params: { limit: 30 }
    });
    dispatch({
      type: 'FETCH_POSTS',
      payload: results.data.messages,
      payload1: results.data.symbol.symbol
    });
  } catch (error) {
    alert('Invalid Symbol');
  }
};

export const fetchFollowedPosts = symbol => async dispatch => {
  const results = await twits.get(`/${symbol}.json`, {
    params: { limit: 15 }
  });
  dispatch({
    type: 'FETCH_FOLLOWED_POSTS',
    payload: results.data.messages
  });
};

export const searchStock = symbol => dispatch => {
  dispatch({ type: 'SEARCH_STOCK', payload: symbol });
};

export const removeSearchedSymbol = symbol => dispatch => {
  dispatch({ type: 'REMOVE_SEARCHED_SYMBOL', payload: symbol });
};

export const followSymbol = symbol => dispatch => {
  dispatch({ type: 'FOLLOW_SYMBOL', payload: symbol });
};

export const unfollowSymbol = symbol => dispatch => {
  dispatch({ type: 'UNFOLLOW_SYMBOL', payload: symbol });
};
