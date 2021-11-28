import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
