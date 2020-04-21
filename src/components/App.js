import React from "react";

import SongList from "./SongList";

const App = () => {
  return (
    <div class="ui container grid">
      <div class="ui row">
        <div class="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
