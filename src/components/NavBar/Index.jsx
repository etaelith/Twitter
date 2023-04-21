import styles from "@navbar/Navbar.module.css";
import home from "@assets/home.svg";
import bookmarks from "@assets/bookmarks.svg";
import communities from "@assets/communities.svg";
import explore from "@assets/explore.svg";
import more from "@assets/more.svg";
import notifications from "@assets/notifications.svg";
import messages from "@assets/messages.svg";
import twitterblue from "@assets/twitterblue.svg";
import profile from "@assets/profile.svg";

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
    <ul className={styles.ulElements}>
      {menu.map((e) => (
        <Element key={e.name} props={e} />
      ))}
    </ul>
  );
};

export default Navbar;
