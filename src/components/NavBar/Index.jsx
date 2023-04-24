import styles from "@navbar/Navbar.module.css";
import home from "@menu/home.svg";
import bookmarks from "@menu/bookmarks.svg";
import communities from "@menu/communities.svg";
import explore from "@menu/explore.svg";
import more from "@menu/more.svg";
import notifications from "@menu/notifications.svg";
import messages from "@menu/messages.svg";
import twitterblue from "@menu/twitterblue.svg";
import profile from "@menu/profile.svg";

import Element from "./Element";

const menu = [
  {
    name: "Home",
    icon: home,
  },
  {
    name: "Explore",
    icon: explore,
  },
  {
    name: "Communities",
    icon: communities,
  },
  {
    name: "Notifications",
    icon: notifications,
  },
  {
    name: "Messages",
    icon: messages,
  },
  {
    name: "Bookmarks",
    icon: bookmarks,
  },
  {
    name: "Twitter Blue",
    icon: twitterblue,
  },
  {
    name: "Profile",
    icon: profile,
  },
  {
    name: "More",
    icon: more,
  },
];
const Navbar = () => {
  return (
    <div className={styles.ulElements}>
      <ul className={styles.ul}>
        {menu.map((e) => (
          <Element key={e.name} props={e} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
