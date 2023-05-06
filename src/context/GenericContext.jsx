import {useEffect, useReducer} from "react";
import {createContext} from "react";
import {faker} from "@faker-js/faker";
import {initialState, reducer, ActionTypes} from "@hooks/useUsers";
import {useContext} from "react";

import {MyContext} from "./MyContext";

export const GenericContext = createContext();

export const GenericProvider = ({children}) => {
  const [stateGeneric, dispatch] = useReducer(reducer, initialState);
  const {state, user, clearTweet} = useContext(MyContext);

  const generateFakeData = () => {
    const avatar = faker.image.avatar();
    const name = faker.name.fullName();
    const username = faker.internet.userName();
    const text = faker.lorem.lines();
    const arrayReactions = Array.from({length: 3}, () =>
      faker.datatype.number({min: 1, max: 1500000}),
    );
    const maxReaction = Math.max(...arrayReactions) + faker.datatype.number({min: 1, max: 100000});

    arrayReactions.push(maxReaction);

    const createdAt = faker.date.between(
      new Date(Date.now() - stateGeneric.lastTweet),
      new Date(Date.now()),
    );

    return {
      avatar,
      name,
      username,
      text,
      createdAt,
      arrayReactions,
    };
  };

  const userResult = async () => {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();

    dispatch({type: ActionTypes.SET_USERS, payload: data.results});
    const tweet = Array.from({length: 10}, generateFakeData);

    dispatch({type: ActionTypes.SET_LOADING_USERS, payload: true});
    dispatch({
      type: ActionTypes.SET_TWEETS,
      payload: tweet,
    });
    dispatch({type: ActionTypes.SET_LOADING_TWEETS, payload: true});
  };

  useEffect(() => {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    dispatch({type: ActionTypes.SET_LOADING_USERS, payload: false});
    userResult();
  }, []);
  const newResults = async () => {
    const newTweets = Array.from({length: 35}, generateFakeData);

    dispatch({
      type: ActionTypes.SET_NEW_TWEETS,
      payload: newTweets,
    });
    dispatch({type: ActionTypes.SET_LOADING_NEW_TWEETS, payload: true});
  };
  const showResults = () => {
    dispatch({type: ActionTypes.PUSH_NEW_TWEETS});
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      newResults();
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);
  const pushTweets = () => {
    const newTweets = [];

    if (state.tweet.trim().length > 0) {
      newTweets.push(user(state.tweet));
    }
    if (state.tweetSecond.trim().length > 0) {
      newTweets.push(user(state.tweetSecond));
    }

    dispatch({type: ActionTypes.SET_NEW_TWEETS, payload: newTweets});
    clearTweet();
  };

  return (
    <GenericContext.Provider value={{stateGeneric, dispatch, showResults, pushTweets}}>
      {children}
    </GenericContext.Provider>
  );
};
