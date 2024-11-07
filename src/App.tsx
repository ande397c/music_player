import { useRef, useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { songsData } from "@/data/tracks";
import { Track } from "@/components/Track";
import { TrackControls } from "@/components/TrackControls";
import { useKeyboardShortcut } from "@/utils/useKeyboardShortcut";
import { Song } from "@/types/song";

const App = () => {
 const [currentTrack, setCurrentTrack] = useState<Song | undefined>();
 const [songs, setSongs] = useState<Song[]>(songsData);
 const [isPlaying, setIsPlaying] = useState(false);
 const audioRef = useRef<HTMLAudioElement>(null);

 useKeyboardShortcut({
  key: ["Space"],
  onKeyPressed: () => {
   handleAudioState();
  },
 });

 const handleTrackClick = (clikedTrack: Song) => {
  setCurrentTrack({
   id: clikedTrack.id,
   trackTitle: clikedTrack.trackTitle,
   trackSrc: clikedTrack.trackSrc,
   artist: clikedTrack.artist,
   imgSrc: clikedTrack.imgSrc,
  });

  setSongs(
   songs.map((song) => {
    if (song.id === clikedTrack.id) {
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
  const currentTrackIndex = songs.findIndex((song) => song.id === currentTrack.id);
  const newIndex = direction === "next" ? (currentTrackIndex + 1) % songs.length : (currentTrackIndex - 1 + songs.length) % songs.length;

  const newTrack = songs[newIndex];
  handleTrackClick(newTrack);
 };

 return (
  <>
   <main className="bg-black mx-auto max-w-xl h-screen">
    <Header />
    <h1 className="text-white text-3xl p-2">Songs</h1>
    <ul className="flex flex-col gap-8 p-2">
     {songs.map((song) => (
      <Track key={song.artist} trackTitle={song.trackTitle} trackLength={song.trackLength} artist={song.artist} imgSrc={song.imgSrc} isSongPlaying={song.isSongPlaying} isPlaying={isPlaying} onClick={() => handleTrackClick(song)} />
     ))}
    </ul>
   </main>
   <TrackControls ref={audioRef} currentTrack={currentTrack} isPlaying={isPlaying} handlePrev={() => handleTrackChange("prev")} onClick={handleAudioState} handleNext={() => handleTrackChange("next")} />
  </>
 );
};

export default App;
