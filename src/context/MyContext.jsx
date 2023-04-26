import {useReducer} from "react";
import {createContext} from "react";

import avatar from "@/assets/avatar.svg";
import {initialState, reducer, ActionTypes} from "@/hooks/useLanguage";

export const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = (text) => {
    return {
      avatar: avatar,
      name: "Deployer Dev",
      username: "Deployer23",
      text: text,
      createdAt: new Date(),
      arrayReactions: [0, 0, 0, 0],
    };
  };
  const handleTweetChange = (event) => {
    dispatch({type: ActionTypes.SET_TWEET, payload: event.target.value});
  };

  const handleTweetChangeSecond = (event) => {
    dispatch({type: ActionTypes.SET_TWEET_SECOND, payload: event.target.value});
  };

  const handleIconClick = () => {
    dispatch({type: ActionTypes.TOGGLE_ROTATE});
    dispatch({type: ActionTypes.TOGGLE_LANGUAGE});
  };
  const handleShow = () => {
    dispatch({type: ActionTypes.SHOW_SWITCH});
  };
  const clearTweet = () => {
    dispatch({type: ActionTypes.CLEAR_TWEETS});
  };

  return (
    <MyContext.Provider
      value={{
        handleTweetChange,
        handleIconClick,
        handleShow,
        state,
        clearTweet,
        handleTweetChangeSecond,
        user,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
