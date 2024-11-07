import "./musicwaves.css";

interface MusicWavesProps {
 isPlaying: boolean;
}

export const MusicWaves = ({ isPlaying }: MusicWavesProps) => {
 return (
  <div className="loader">
   {[...Array(4)].map((_, index) => (
    <span key={index} className={`${isPlaying ? "playing" : "paused"}` + " stroke"}></span>
   ))}
  </div>
 );
};
