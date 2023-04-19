import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Trends from "./pages/Trends";

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <Home />
      <Trends />
    </section>
  );
};

export default App;
