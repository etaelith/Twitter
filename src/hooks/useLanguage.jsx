export const initialState = {
  rotate: false,
  language: false,
  show: false,
  secondLanguage: "Español",
  tweet: "",
  TweetSecond: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SHOW_SWITCH":
      return {...state, show: !state.show};
    case "TOGGLE_ROTATE":
      return {...state, rotate: !state.rotate};
    case "TOGGLE_LANGUAGE":
      return {...state, language: !state.language};
    case "SET_TWEET_SECOND":
      return {...state, TweetSecond: action.payload};
    case "SET_TWEET":
      return {...state, tweet: action.payload};
    default:
      throw new Error("Invalid action type");
  }
}
