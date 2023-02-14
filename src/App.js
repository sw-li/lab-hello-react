// src/App.js
import "./App.css";
import Feature from "./components/Features";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";

import icone1 from "./assets/icon1.png";
import icone2 from "./assets/icon2.png";
import icone3 from "./assets/icon3.png";
import icone4 from "./assets/icon4.png";
import reactL from "./assets/logo512.png"
import reactS from "./assets/logo192.png"

function App() {
  return (
    <nav className="App">
      <div className="top">
        <Navbar></Navbar>
        <Headline></Headline>
      <div className="reactLogo reactLogoL">
        <img src={reactL} alt="react logo L" />
      </div>
      <div className="reactLogo reactLogoS">
        <img src={reactS} alt="react logo S" />
      </div>
      </div>

      <div className="features">
        <Feature
          imgSrc={icone1}
          featureName="Declarative"
          featureDescription="React makes it painless to create interactive UIs."
        ></Feature>
                <Feature
          imgSrc={icone2}
          featureName="Components"
          featureDescription="Build encapsulated components that manage their state"
        ></Feature>
                <Feature
          imgSrc={icone3}
          featureName="Single-Way"
          featureDescription="A set of immutable values are passed to the components"
        ></Feature>
                <Feature
          imgSrc={icone4}
          featureName="JSX"
          featureDescription="Statically-typed, designed to run on modern browsers."
        ></Feature>
      </div>
    </nav>
  );
}
export default App;
