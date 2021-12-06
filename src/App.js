import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import About from "./pages/About";
import Login from "./pages/Login";

import { Route, Switch } from "react-router-dom";
import BookedProperties from "./pages/BookedProperties";

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Booked-properties">
          <BookedProperties/>
        </Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
