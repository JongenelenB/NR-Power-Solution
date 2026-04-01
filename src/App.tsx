import "./App.css";
import Diensten from "./components/Diensten";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  const sections = [
    { id: "Home", component: <Hero /> },
    { id: "Diensten", component: <Diensten /> },
    { id: "About Me", component: <AboutMe /> },
    { id: "Contact", component: <Contact /> },
  ];

  return (
    <>
      <Navbar />
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </>
  );
}

export default App;
