import Home from "@components/Main/Index";
import Navbar from "@components/NavBar/Index";
import RightBar from "@components/socialBar/Index";

import {MyProvider} from "./context/MyContext";

const App = () => {
  return (
    <MyProvider>
      <section className="App">
        <Navbar />
        <Home />
        <RightBar />
      </section>
    </MyProvider>
  );
};

export default App;
