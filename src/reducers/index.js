import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Barbie Girl", duration: "4:00" },
    { title: "I want it that way", duration: "3:33" },
    { title: "Work from Home", duration: "2:20" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
