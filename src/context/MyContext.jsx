import {useReducer} from "react";
import {createContext} from "react";

import {initialState, reducer} from "@/hooks/useLanguage";

export const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTweetChange = (event) => {
    dispatch({type: "SET_TWEET", payload: event.target.value});
  };

  const handleTweetChangeSecond = (event) => {
    dispatch({type: "SET_TWEET_SECOND", payload: event.target.value});
  };

  const handleTweetSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "SET_TWEET", payload: ""});
  };
  const handleIconClick = () => {
    dispatch({type: "TOGGLE_ROTATE"});
    dispatch({type: "TOGGLE_LANGUAGE"});
  };
  const handleShow = () => {
    dispatch({type: "SHOW_SWITCH"});
  };

  return (
    <MyContext.Provider
      value={{
        handleTweetChange,
        handleIconClick,
        handleShow,
        state,
        handleTweetSubmit,
        handleTweetChangeSecond,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
