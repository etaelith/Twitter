import {useReducer} from "react";
import {useState} from "react";
import {createContext} from "react";

import {initialState, reducer} from "../hooks/useLanguage";

export const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleTweetSubmit = (event) => {
    event.preventDefault();
    setTweet("");
  };
  const handleIconClick = () => {
    dispatch({type: "TOGGLE_ROTATE"});
    dispatch({type: "TOGGLE_LANGUAGE"});
  };

  return (
    <MyContext.Provider
      value={{
        tweet,
        handleTweetChange,

        handleIconClick,
        handleTweetSubmit,
        state,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
