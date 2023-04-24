import Home from "@components/Main/Index";
import Navbar from "@components/NavBar/Index";
import RightBar from "@components/SocialBar/Index";

import {MyProvider} from "./context/MyContext";
import {GenericProvider} from "./context/GenericContext";

const App = () => {
  return (
    <GenericProvider>
      <MyProvider>
        <section className="App">
          <Navbar />
          <Home />
          <RightBar />
        </section>
      </MyProvider>
    </GenericProvider>
  );
};

export default App;
