import {useEffect} from "react";
import {useState} from "react";
import {createContext} from "react";
import {faker} from "@faker-js/faker";

export const GenericContext = createContext();

export const GenericProvider = ({children}) => {
  const generateFakeTweet = () => {
    const avatar = faker.image.avatar();
    const name = faker.name.fullName();
    const username = faker.internet.userName();
    const text = faker.lorem.text({max: 240, min: 10});
    const createdAt = faker.date.between(
      new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      new Date(Date.now() - 1 * 60 * 1000),
    );

    return {
      avatar,
      name,
      username,
      text,
      createdAt,
    };
  };
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setLoading(false);
    const userResult = async () => {
      const res = await fetch("https://randomuser.me/api/?results=5");
      const data = await res.json();

      setUsers(data.results);
      const tweet = Array.from({length: 5}, generateFakeTweet);

      setTweets(tweet);
      setLoading(true);
    };

    userResult();
  }, []);
  const getRandomBoolean = () => {
    const threshold = 0.5;

    return Math.random() > threshold;
  };

  return (
    <GenericContext.Provider value={{getRandomBoolean, users, tweets, loading}}>
      {children}
    </GenericContext.Provider>
  );
};
