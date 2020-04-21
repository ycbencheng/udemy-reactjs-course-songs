import React, { Component } from "react";

import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div class="item" key={song.title}>
          {song.title}
          <div class="right floated content">
            <button
              class="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div class="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div class="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);
