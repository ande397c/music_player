import { forwardRef, useState } from "react";
import { Thumbnail } from "@/components/Thumbnail";
import { IconButton } from "@/components/IconButton";
import { faStepBackward, faPlay, faPause, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Song } from "@/types/song";

interface TrackControlsProps {
 currentTrack: Song | undefined;
 isPlaying: boolean;
 handlePrev: (direction: string) => void;
 onClick: () => void;
 handleNext: (direction: string) => void;
}

export const TrackControls = forwardRef<HTMLAudioElement, TrackControlsProps>(({ currentTrack, isPlaying, handlePrev, onClick, handleNext }: TrackControlsProps, ref) => {
 const [trackProgress, setTrackProgress] = useState(0);
 const [musicTotalLength, setMusicTotalLength] = useState("00:00");
 const [musicCurrentTime, setMusicCurrentTime] = useState("00:00");

 const audioElement = ref as React.MutableRefObject<HTMLAudioElement | null>;

 if (!currentTrack) return null;

 const handleMusicProgressBar = (e: React.FormEvent<HTMLInputElement>) => {
  if (!audioElement.current) return;

  const element = e.currentTarget as HTMLInputElement;
  const value = parseInt(element.value, 10);
  setTrackProgress(value);

  audioElement.current.currentTime = (value * audioElement.current.duration) / 100;
 };

 const handleAudioUpdate = () => {
  if (!audioElement.current) return;

  const minutes = Math.floor(audioElement.current.duration / 60);
  const seconds = Math.floor(audioElement.current.duration % 60);
  const musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  setMusicTotalLength(musicTotalLength0);

  const currentMin = Math.floor(audioElement.current.currentTime / 60);
  const currentSec = Math.floor(audioElement.current.currentTime % 60);
  const musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin}:${currentSec < 10 ? `0${currentSec}` : currentSec}`;
  setMusicCurrentTime(musicCurrentT);

  const progress = (audioElement.current.currentTime / audioElement.current.duration) * 100;
  setTrackProgress(isNaN(progress) ? 0 : progress);
 };

 return (
  <div className="text-white bg-darkGrey bottom-0 fixed w-full rounded-t-md p-2">
   <div className="flex items-center gap-3">
    <Thumbnail imgSrc={currentTrack?.imgSrc} />
    <div>
     <h3>{currentTrack.trackTitle}</h3>
     <p className="text-grey text-sm">{currentTrack.artist}</p>
    </div>
   </div>
   <div className="flex justify-center flex-col items-center my-2 gap-1">
    <div className="flex items-center gap-2 mb-2">
     <IconButton onClick={() => handlePrev("prev")} variant="noBg" icon={faStepBackward} />
     <IconButton onClick={onClick} variant="withBg" icon={isPlaying ? faPause : faPlay} />
     <IconButton onClick={() => handleNext("next")} variant="noBg" icon={faStepForward} />
    </div>
    <div className="flex items-center w-full gap-3 whitespace-nowrap">
     <p>{musicCurrentTime}</p>
     <input className="w-full rounded-lg overflow-hidden appearance-none bg-test h-[0.8rem]" type="range" value={trackProgress} onChange={handleMusicProgressBar} />
     <p>{musicTotalLength}</p>
    </div>
    <audio src={currentTrack.trackSrc} ref={ref} onTimeUpdate={handleAudioUpdate} onEnded={() => handleNext("next")}></audio>
   </div>
  </div>
 );
});
