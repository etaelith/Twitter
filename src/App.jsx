import React from "react";
import {useState} from "react";
import {useEffect} from "react";

import TwitterCard from "./components/TwitterCard";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userResult = async () => {
      const res = await fetch("https://randomuser.me/api/?results=5");
      const data = await res.json();

      setUsers(data.results);
    };

    userResult();
  }, []);
  const getRandomBoolean = () => {
    const threshold = 0.5;

    return Math.random() > threshold;
  };

  return (
    <section className="App">
      {users.length > 0 ? (
        users.map((user) => (
          <TwitterCard
            key={user.login.uuid}
            image={user.picture.large}
            isFollowing={getRandomBoolean()}
            name={`${user.name.first} ${user.name.last}`}
            userName={user.login.username}
          />
        ))
      ) : (
        <div>hola</div>
      )}
    </section>
  );
};

export default App;
