import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}



export default App;
