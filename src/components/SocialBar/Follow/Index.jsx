import styles from "@socialbar/follow/FollowCard.module.css";
import {useContext} from "react";

import TwitterCard from "./TwitterCard";

import {GenericContext} from "@/context/GenericContext";
import Loading from "@/components/Common/RightBar/Loading";
import {getRandomBoolean} from "@/utils/randomFollow";

const FollowList = () => {
  const {stateGeneric} = useContext(GenericContext);

  return (
    <div className={styles.cardFollow}>
      {!stateGeneric.loadingUsers ? (
        <Loading />
      ) : (
        stateGeneric.users.map((user) => (
          <TwitterCard
            key={user.login.uuid}
            image={user.picture.large}
            isFollowing={getRandomBoolean()}
            name={`${user.name.first} ${user.name.last}`}
            userName={user.login.username}
          />
        ))
      )}
    </div>
  );
};

export default FollowList;
