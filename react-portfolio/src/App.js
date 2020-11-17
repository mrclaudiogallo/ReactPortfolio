import React from 'react';
import './App.css';
import Projects from "./Projects";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

function App() {
  return (
    <React.Fragment>
      <NavBar />
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
