import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div>
        {/* Intro  */}
        <div className="myBG">
          <NavigationBar />
          <Intro />
          <Trending name="rzal" />
        </div>

        {/* close intro */}
      </div>
    );
  }
}

export default App;
