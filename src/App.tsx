import "./App.css";
import Diensten from "./components/Diensten";
import Footer from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Diensten />
      <Footer />
    </>
  );
}

export default App;
