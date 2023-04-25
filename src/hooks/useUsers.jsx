export const initialState = {
  users: [],
  tweets: [],
  newTweets: [],
  loadingUsers: false,
  loadingTweets: false,
  loadingNewTweets: false,
};
export const ActionTypes = {
  SET_USERS: "SET_USERS",
  SET_TWEETS: "SET_TWEETS",
  SET_NEW_TWEETS: "SET_NEW_TWEETS",
  SET_LOADING_TWEETS: "SET_LOADING_TWEETS",
  SET_LOADING_USERS: "SET_LOADING_USERS",
  SET_LOADING_NEW_TWEETS: "SET_LOADING_NEW_TWEETS",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.SET_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };
    case ActionTypes.SET_NEW_TWEETS:
      return {
        ...state,
        newTweets: state.newTweets.concat(action.payload),
      };
    case ActionTypes.PUSH_NEW_TWEETS:
      const sortedNewTweets = state.newTweets.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
      );
      const combinedTweets = [...sortedNewTweets, ...state.tweets];
      const sortedTweets = combinedTweets.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      );

      return {
        ...state,
        tweets: sortedTweets,
        newTweets: [],
        loadingNewTweets: false,
      };

    case ActionTypes.SET_LOADING_TWEETS:
      return {
        ...state,
        loadingTweets: action.payload,
      };
    case ActionTypes.SET_LOADING_USERS:
      return {
        ...state,
        loadingUsers: action.payload,
      };
    case ActionTypes.SET_LOADING_NEW_TWEETS:
      return {
        ...state,
        loadingNewTweets: action.payload,
      };
    default:
      return state;
  }
};
