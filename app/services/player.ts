import { Audio } from "expo-av";



export async function playMusicURL(uri: any, isLoop: boolean = false) {
    const { sound } = await Audio.Sound.createAsync({
      uri: uri,
    });
    await sound.playAsync();
    return sound;
}

