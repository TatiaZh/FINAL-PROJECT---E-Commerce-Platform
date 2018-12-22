import React, { Component } from "react";
import Header from "./components/header";
import Body from "./components/mainBody";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
