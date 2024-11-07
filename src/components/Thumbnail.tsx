import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ThumbnailProps {
 imgSrc?: string;
}

export const Thumbnail = ({ imgSrc }: ThumbnailProps) => {
 const validImg = imgSrc && imgSrc.trim() !== "";

 return (
  <>
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
  </>
 );
};
