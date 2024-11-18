import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ThumbnailProps {
 imgSrc?: string;
 trackTitle?: string;
 trackArtist?: string;
 isSongPlaying?: boolean;
}

export const Thumbnail = ({ imgSrc, trackTitle, trackArtist, isSongPlaying }: ThumbnailProps) => {
 const validImg = imgSrc && imgSrc.trim() !== "";

 return (
  <>
   <div className="flex items-center gap-3">
    {validImg ? (
     <img className="size-12 rounded-md" src={imgSrc} alt="thumbnail" />
    ) : (
     <div className="relative flex items-center justify-center w-14 h-14 rounded-lg overflow-hidden bg-[#191b26]">
      <div className="absolute">
       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsla(0,0%,100%,0.32)] text-[#191b26]">
        <FontAwesomeIcon icon={faMusic} />
       </span>
      </div>
     </div>
    )}
    <div>
     <h3 className={`${isSongPlaying && "text-accent"}`}>{trackTitle}</h3>
     <p className="text-grey">{trackArtist}</p>
    </div>
   </div>
  </>
 );
};
