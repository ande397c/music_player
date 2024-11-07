import { Thumbnail } from "./Thumbnail";
import { MusicWaves } from "./MusicWaves";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TrackProps {
 trackTitle: string;
 artist: string;
 trackLength: string | undefined;
 imgSrc: string;
 isSongPlaying: boolean | undefined;
 isPlaying: boolean;
 onClick: () => void;
}

export const Track = ({ trackTitle, artist, trackLength, imgSrc, isSongPlaying, isPlaying, onClick }: TrackProps) => {
 return (
  <li className="flex justify-between items-center text-white" onClick={onClick}>
   <div className="flex items-center gap-3">
    <Thumbnail imgSrc={imgSrc} />
    <div>
     <h3 className={`${isSongPlaying && "text-accent"}`}>{trackTitle}</h3>
     <p className="text-grey">{artist}</p>
    </div>
   </div>
   {isSongPlaying ? (
    <MusicWaves isPlaying={isPlaying} />
   ) : (
    <p className="flex items-center gap-2">
     <FontAwesomeIcon icon={faClock} />
     {trackLength}
    </p>
   )}
  </li>
 );
};
