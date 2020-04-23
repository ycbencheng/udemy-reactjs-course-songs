import React from "react";

import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div class="ui container grid">
      <div class="ui row">
        <div class="column eight wide">
          <SongList />
        </div>
        <div class="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
