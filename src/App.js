import Intro from "./components/Intro/intro.jsx";
import About from "./components/About/About.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import { useContext, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/toggle/Toggle.jsx";
import { ThemeContext } from "./context.js";

function App() {
  useEffect(() => {
    document.title = "RADY";
  }, []);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
