import React, { Component } from 'react';
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";

class App extends Component {


  render() {
    return (
      <div className="App">
      	<NavBar/>
      	<LogIn />
      </div>
    );
  }
}

export default App;
