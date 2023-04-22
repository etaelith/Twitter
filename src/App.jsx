import Home from "@components/Main/Index";
import Navbar from "@components/NavBar/Index";
import RightBar from "@components/socialBar/Index";

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <Home />
      <RightBar />
    </section>
  );
};

export default App;
