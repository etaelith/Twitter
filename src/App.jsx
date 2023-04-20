import Home from "./components/Main/Home";
import Navbar from "./components/NavBar/Navbar";
import RightBar from "./pages/RightBar";

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
