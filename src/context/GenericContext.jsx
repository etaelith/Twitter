import {useEffect, useReducer} from "react";
import {createContext} from "react";
import {faker} from "@faker-js/faker";
import {initialState, reducer, ActionTypes} from "@hooks/useUsers";

export const GenericContext = createContext();

export const GenericProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const generateFakeTweet = () => {
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
      new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 1000),
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
  const generateNewFakeTweet = (times) => {
    const avatar = faker.image.avatar();
    const name = faker.name.fullName();
    const username = faker.internet.userName();
    const text = faker.lorem.lines();
    const arrayReactions = Array.from({length: 3}, () =>
      faker.datatype.number({min: 1, max: 1500000}),
    );
    const maxReaction = Math.max(...arrayReactions) + faker.datatype.number({min: 1, max: 100000});

    arrayReactions.push(maxReaction);
    const createdAt = faker.date.between(times, new Date(Date.now() - 1000));

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
    const tweet = Array.from({length: 10}, generateFakeTweet);

    dispatch({type: ActionTypes.SET_LOADING_USERS, payload: true});
    dispatch({
      type: ActionTypes.SET_TWEETS,
      payload: tweet.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
    });
    dispatch({type: ActionTypes.SET_LOADING_TWEETS, payload: true});
  };

  useEffect(() => {
    dispatch({type: ActionTypes.SET_LOADING, payload: false});
    dispatch({type: ActionTypes.SET_LOADING_USERS, payload: false});
    userResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const newResults = async (times) => {
    const newTweets = Array.from({length: 35}, () => generateNewFakeTweet(times));

    dispatch({
      type: ActionTypes.SET_NEW_TWEETS,
      payload: newTweets,
    });
    dispatch({type: ActionTypes.SET_LOADING_NEW_TWEETS, payload: true});
  };
  const showResults = () => {
    dispatch({type: ActionTypes.SET_SHOW_RESULTS});
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const defaultDate = new Date(Date.now() - 60 * 60 * 1000);
      const date = new Date(state.tweets[0]?.createdAt || defaultDate);

      newResults(date.getTime());
      //hay que agregarle intervalo
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GenericContext.Provider value={{state, dispatch, showResults}}>
      {children}
    </GenericContext.Provider>
  );
};
