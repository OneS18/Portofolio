import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AboutMe />
        <Projects />
      </Router>
    </div>
  );
}

export default App;
