const initialState = {
  symbol: '',
  messages: [],
  followedMessages: [],
  followedSymbols: [],
  searchedSymbols: []
};

export default (state = initialState, action) => {
  if (state.searchedSymbols.length > 0) {
    if ([...state.searchedSymbols].includes(action.payload1)) {
      var index = state.searchedSymbols.indexOf(action.payload1);
      state.searchedSymbols.splice(index, 1);
    }
  }

  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        messages: action.payload,
        searchedSymbols: [...state.searchedSymbols, action.payload1]
      };
    case 'FETCH_FOLLOWED_POSTS':
      return {
        ...state,
        followedMessages: action.payload
      };
    case 'SEARCH_STOCK':
      return { ...state, symbol: action.payload };
    case 'REMOVE_SEARCHED_SYMBOL':
      return {
        ...state,
        searchedSymbols: [
          ...state.searchedSymbols.filter(symbol => symbol !== action.payload)
        ]
        // searchedSymbols: [
        //   ...state.searchedSymbols.filter(symbol => symbol !== action.payload)
        // ]
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
          ...state.followedSymbols.filter(symbol => symbol === action.payload)
        ]
      };
    default:
      return state;
  }
};
