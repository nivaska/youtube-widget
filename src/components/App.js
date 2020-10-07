import React, { Component } from "react";
import SongsList from "./SongsList";
import SongDetail from "./SongDetail";
const App = () => {
  return (
    <div className="ui container grid">
      <div className="row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
