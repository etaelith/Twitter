export const initialState = {
  rotate: false,
  language: false,
  secondLanguage: "Español",
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_ROTATE":
      return {...state, rotate: !state.rotate};
    case "TOGGLE_LANGUAGE":
      return {...state, language: !state.language};
    case "SET_SECOND_LANGUAGE":
      return {...state, secondLanguage: action.payload};
    default:
      throw new Error("Invalid action type");
  }
}
