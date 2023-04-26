import Home from "@components/Main/Index";
import Navbar from "@components/NavBar/Index";
import RightBar from "@components/SocialBar/Index";

import {MyProvider} from "./context/MyContext";
import {GenericProvider} from "./context/GenericContext";

const App = () => {
  return (
    <MyProvider>
      <GenericProvider>
        <section className="App">
          <Navbar />
          <Home />
          <RightBar />
        </section>
      </GenericProvider>
    </MyProvider>
  );
};

export default App;
