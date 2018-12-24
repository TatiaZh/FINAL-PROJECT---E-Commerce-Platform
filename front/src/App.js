import React, { Component } from "react";
import Header from "./components/homePage/header";
import Body from "./components/homePage/mainBody";
import Footer from "./components/homePage/footer";
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
