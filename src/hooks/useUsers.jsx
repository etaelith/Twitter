export const initialState = {
  users: [],
  tweets: [],
  newTweets: [],
  loadingUsers: false,
  loadingTweets: false,
  loadingNewTweets: false,
  lastTweet: 432000000,
};
export const ActionTypes = {
  SET_USERS: "SET_USERS",
  SET_TWEETS: "SET_TWEETS",
  SET_NEW_TWEETS: "SET_NEW_TWEETS",
  SET_LAST_TWEET: "SET_LAST_TWEET",
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
      const homeTweets = action.payload;
      const firstTweets = homeTweets.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

      return {
        ...state,
        tweets: firstTweets,
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
    case ActionTypes.SET_LAST_TWEET:
      const createdAt = new Date(state.tweets[0].createdAt);
      const now = new Date();
      const lastTime = now.getTime() - createdAt.getTime();

      return {
        ...state,
        lastTweet: lastTime,
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
