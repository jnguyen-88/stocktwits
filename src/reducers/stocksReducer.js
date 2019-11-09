const initialState = {
  symbol: '',
  messages: [],
  followedSymbols: [],
  searchedSymbols: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        messages: action.payload,
        searchedSymbols: [...state.searchedSymbols, action.payload1]
      };
    case 'SEARCH_STOCK':
      return { ...state, symbol: action.payload };
    case 'REMOVE_SEARCHED_SYMBOL':
      return {
        ...state,
        searchedSymbols: [
          ...state.searchedSymbols.filter(symbol => symbol !== action.payload)
        ]
      };
    case 'FOLLOW_SYMBOL':
      return {
        ...state,
        followedSymbols: [...state.followedSymbols, action.payload]
      };
    case 'UNFOLLOW_SYMBOL':
      return {
        ...state,
        followedSymbols: [
          ...state.followedSymbols.filter(symbol => symbol !== action.payload)
        ]
      };
    default:
      return state;
  }
};
