import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/others/HomePage";
import PlayerStats from "./Components/others/PlayerStats";
import AddPlayer from "./Components/others/AddPlayer";
import Navigation from "./Components/navigation/Navigation";
import ShowData from "./Components/others/ShowData";
import EditPlayer from "./Components/others/EditPlayer";
import Logos from "./Components/navigation/Logos";
function App() {
  return (
    <>
      <header>
        <Logos></Logos>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path="/playerstats" element={<PlayerStats />}></Route>
          <Route
            path="/playerstats/searchPlayer/:player"
            element={<ShowData />}
          ></Route>
           <Route
            path="/playerstats/addPlayer"
            element={<AddPlayer />}
          ></Route>
           <Route
            path="/playerstats/editPlayerInfo/:player"
            element={<EditPlayer />}
          ></Route>
        </Routes>

        {/*
        <Switch>
        
          <Route path="/playerstats/addPlayer">
            <AddPlayer/>
          </Route>
          <Route path="playerstats/addPlayer/playerDetails">
            <AddPlayer/>
          </Route>
        </Switch>
       */}
      </main>
    </>
  );
}

export default App;
