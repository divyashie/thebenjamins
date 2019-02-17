import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUploadPage from './components/fileUploads/FileUploadPage';
import Container from 'react-bootstrap/Container';
import Navbar from "./components/Navbar";
import Analysis from "./components/analysis/Analysis";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={FileUploadPage} />
    <Route exact path="/analysis" component={Analysis} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container >
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;
