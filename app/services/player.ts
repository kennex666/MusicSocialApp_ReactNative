import Sound from "react-native-sound";


export function playMusicURL(uri: any, isLoop: boolean) {
    const player = new Sound(uri, undefined, (error) => {
      if (error) {
        console.log("Failed to load the sound", error);
        return;
      }
      player.setNumberOfLoops(isLoop ? -1 : 0); // Đặt nhạc phát liên tục
      player.play(() => {
        // Đảm bảo khi nhạc kết thúc, tiếp tục phát
        player.setCurrentTime(0);
        player.play();
      });
    });
}