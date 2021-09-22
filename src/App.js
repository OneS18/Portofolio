import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router>
            <Route path="/">
              <Header />
            </Route>
            <Route>
              <AboutMe path="/about" />
            </Route>
            <Route>
              <Projects path="/projects" />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
