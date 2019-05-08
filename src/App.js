import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRoom";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
