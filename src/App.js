import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AboutMe />
      </Router>
    </div>
  );
}

export default App;
