export const initialState = {
  rotate: false,
  language: false,
  show: false,
  secondLanguage: "Español",
  tweet: "",
  secondLanguageTweet: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SHOW_SWITCH":
      return {...state, show: !state.show};
    case "TOGGLE_ROTATE":
      return {...state, rotate: !state.rotate};
    case "TOGGLE_LANGUAGE":
      return {...state, language: !state.language};
    case "SET_SECOND_LANGUAGE":
      return {...state, secondLanguage: action.payload};
    case "SET_TWEET":
      return {...state, tweet: action.payload};
    default:
      throw new Error("Invalid action type");
  }
}
