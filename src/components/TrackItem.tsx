import { Thumbnail } from "./Thumbnail";
import { MusicWaves } from "./MusicWaves";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Track } from "@/types/track";

interface TrackProps {
 track: Track;
 isPlaying: boolean;
 onClick: () => void;
}

export const TrackItem = ({ track, isPlaying, onClick }: TrackProps) => {
 return (
  <li className="flex justify-between items-center text-white" onClick={onClick}>
   <Thumbnail imgSrc={track.imgSrc} isSongPlaying={track.isSongPlaying} trackArtist={track.trackArtist} trackTitle={track.trackTitle} />
   {track.isSongPlaying ? (
    <MusicWaves isPlaying={isPlaying} />
   ) : (
    <p className="flex items-center gap-2">
     <FontAwesomeIcon icon={faClock} />
     {track.trackLength}
    </p>
   )}
  </li>
 );
};
