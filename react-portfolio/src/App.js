import React from 'react';
import './App.css';
import Projects from "./Projects";
import Layout from "./components/Layout";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
