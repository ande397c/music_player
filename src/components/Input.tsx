import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
 placeholder: string;
 onChange?: () => void;
}

export const Input = ({ placeholder, onChange }: InputProps) => {
 return (
  <form className="flex justify-center items-center gap-3 group w-full text-lightGrey transition-all">
   <div className="relative w-full">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">{<FontAwesomeIcon icon={faMagnifyingGlass} />}</div>
    <input onChange={onChange} type="text" className="block ps-9 p-1 rounded-md w-full bg-grey placeholder-lightGrey text-white" placeholder={placeholder} />
   </div>
  </form>
 );
};
