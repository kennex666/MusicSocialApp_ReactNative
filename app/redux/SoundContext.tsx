import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

interface SoundContextType {
  playSound: (soundUri: string) => Promise<void>;
  pauseSound: () => Promise<void>;
  resumeSound: () => Promise<void>;
  stopSound: () => Promise<void>;
  isPlaying: boolean;
  duration: number; // Duration in milliseconds
  position: number; // Current position in milliseconds
  soundInfo: SoundInfo | null;
  setPosition: (position: number) => Promise<void>; // Function to set position
  toggleLooping: () => void; // Function to toggle looping
  metadata: any;
  setMetadata: (metadata: any) => void;
}

interface SoundInfo {
  uri: string;
  duration: number; // Duration in milliseconds
}

export const SoundContext = createContext<SoundContextType | undefined>(
  undefined
);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPositionState] = useState(0);
  const [soundInfo, setSoundInfo] = useState<SoundInfo | null>(null);
  const [isLooping, setIsLooping] = useState(false);
  const [metadata, setMetadata] = useState<any>(null);

  const toggleLooping = () => {
    if (soundRef.current) {
      soundRef.current.setIsLoopingAsync(!isLooping);
      setIsLooping(!isLooping);
    }
  };

  const setPosition = async (newPosition: number) => {
    if (soundRef.current) {
      await soundRef.current.setPositionAsync(newPosition);
      setPositionState(newPosition); // Update position state
    }
  };

  const playSound = async (soundUri: string) => {
    if (soundRef.current) {
      soundRef.current.setOnPlaybackStatusUpdate(null); // Clear listener
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
    }
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        { uri: soundUri },
        { shouldPlay: true }
      );
      soundRef.current = sound;
      setDuration(status.durationMillis || 0);
      setPositionState(status.positionMillis || 0);

      sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if (status.isLoaded) {
          setIsPlaying(true);
          setPositionState(status.positionMillis || 0);
          setDuration(status.durationMillis || 0);
        }
      });

      setSoundInfo({ uri: soundUri, duration: status.durationMillis || 0 });
      await sound.playAsync();
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const pauseSound = async () => {
    if (soundRef.current) {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeSound = async () => {
    if (soundRef.current) {
      await soundRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  const stopSound = async () => {
    if (soundRef.current) {
      soundRef.current.setOnPlaybackStatusUpdate(null); // Clear listener
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      setIsPlaying(false);
      setPositionState(0);
    }
  };
  

  React.useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, []);

  return (
    <SoundContext.Provider
      value={{
        playSound,
        pauseSound,
        resumeSound,
        stopSound,
        isPlaying,
        duration,
        position,
        soundInfo,
        setPosition,
        toggleLooping,
        metadata,
        setMetadata,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};
