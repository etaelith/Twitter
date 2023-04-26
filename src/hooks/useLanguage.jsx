export const initialState = {
  rotate: false,
  language: false,
  show: false,
  secondLanguage: "Español",
  tweet: "",
  tweetSecond: "",
};
export const ActionTypes = {
  SET_TWEET: "SET_TWEET",
  SET_TWEET_SECOND: "SET_TWEET_SECOND",
  SHOW_SWITCH: "SHOW_SWITCH",
  TOGGLE_ROTATE: "TOGGLE_ROTATE",
  TOGGLE_LANGUAGE: "TOGGLE_LANGUAGE",
  CLEAR_TWEETS: "CLEAR_TWEETS",
};
export function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.SHOW_SWITCH:
      return {...state, show: !state.show};
    case ActionTypes.TOGGLE_ROTATE:
      return {...state, rotate: !state.rotate};
    case ActionTypes.TOGGLE_LANGUAGE:
      return {...state, language: !state.language};
    case ActionTypes.SET_TWEET_SECOND:
      return {...state, tweetSecond: action.payload};
    case ActionTypes.SET_TWEET:
      return {...state, tweet: action.payload};
    case ActionTypes.CLEAR_TWEETS:
      return {...state, tweet: "", tweetSecond: ""};
    default:
      throw new Error("Invalid action type");
  }
}
