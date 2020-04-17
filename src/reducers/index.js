const songReducer = () => {
  return [
    { title: "ABC", duration: "2:01" },
    { title: "EFG", duration: "3:01" },
    { title: "XYZ", duration: "4:01" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
