import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginDashboard from "./components/login/LoginDashboard";
import RoomDashboard from "./components/rooms/RoomDashboard";
import RoomDetailDashboard from "./components/room-detail/RoomDetailDashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginDashboard></LoginDashboard>
        </Route>
        <Route exact path="/rooms">
          <RoomDashboard></RoomDashboard>
        </Route>
        <Route exact path="/rooms/:id">
          <RoomDetailDashboard></RoomDetailDashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
