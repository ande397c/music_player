import { useRef, useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { trackData } from "@/data/tracks";
import { TrackItem } from "@/components/TrackItem";
import { TrackControls } from "@/components/TrackControls";
import { useKeyboardShortcut } from "@/components/hooks/useKeyboardShortcut";
import { Track } from "@/types/track";

const App = () => {
 const [currentTrack, setCurrentTrack] = useState<Track | undefined>(undefined);
 const [tracks, setTracks] = useState<Track[]>(trackData);
 const [isPlaying, setIsPlaying] = useState(false);
 const audioRef = useRef<HTMLAudioElement>(null);

 useKeyboardShortcut({
  key: ["Space"],
  onKeyPressed: () => {
   handleAudioState();
  },
 });

 const handleTrackClick = (clikedTrack: Track) => {
  setCurrentTrack({
   trackId: clikedTrack.trackId,
   trackTitle: clikedTrack.trackTitle,
   trackSrc: clikedTrack.trackSrc,
   trackArtist: clikedTrack.trackArtist,
   imgSrc: clikedTrack.imgSrc,
  });

  setTracks(
   tracks.map((song) => {
    if (song.trackId === clikedTrack.trackId) {
     return { ...song, isSongPlaying: true };
    } else {
     return { ...song, isSongPlaying: false };
    }
   })
  );

  setIsPlaying(true);

  const timeout = setTimeout(() => {
   audioRef.current?.play();
  }, 100);

  return () => clearTimeout(timeout);
 };

 const handleAudioState = () => {
  setIsPlaying((prev) => !prev);
 };

 useEffect(() => {
  if (!audioRef.current) return;

  if (isPlaying) {
   audioRef.current.play();
  } else {
   audioRef.current.pause();
  }
 }, [isPlaying]);

 const handleTrackChange = (direction: "prev" | "next") => {
  if (!currentTrack) return;
  const currentTrackIndex = tracks.findIndex((song) => song.trackId === currentTrack.trackId);
  const newIndex = direction === "next" ? (currentTrackIndex + 1) % tracks.length : (currentTrackIndex - 1 + tracks.length) % tracks.length;

  const newTrack = tracks[newIndex];
  handleTrackClick(newTrack);
 };

 return (
  <>
   <main className="bg-black mx-auto max-w-xl h-screen">
    <Header />
    <h1 className="text-white text-3xl p-2">Songs</h1>
    <ul className="flex flex-col gap-8 p-2">
     {tracks.map((song) => (
      <TrackItem key={song.trackId} track={song} isPlaying={isPlaying} onClick={() => handleTrackClick(song)} />
     ))}
    </ul>
   </main>
   <TrackControls ref={audioRef} currentTrack={currentTrack} isPlaying={isPlaying} handlePrev={() => handleTrackChange("prev")} onClick={handleAudioState} handleNext={() => handleTrackChange("next")} />
  </>
 );
};

export default App;
