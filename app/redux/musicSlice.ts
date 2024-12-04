import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  music: null, // Có thể chứa thông tin bài hát đang phát
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    playMusic: (state, action) => {
      state.isPlaying = true;
      state.music = action.payload; // Lưu thông tin bài hát đang phát
    },
    stopMusic: (state) => {
      state.isPlaying = false;
      state.music = null;
    },
    pauseMusic: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { playMusic, stopMusic, pauseMusic } = musicSlice.actions;
export default musicSlice.reducer;
