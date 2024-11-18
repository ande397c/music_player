import { Input } from "@/components/Input";
import { faUserGroup, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
 return (
  <header className="h-fit flex justify-between flex-1 gap-4 items-center p-2 pt-2 mb-6 text-white">
   <Input placeholder="Search" />
   <div className="flex items-center gap-4">
    <div className="flex gap-6">
     <FontAwesomeIcon icon={faBell} size="lg" />
     <FontAwesomeIcon icon={faUserGroup} size="lg" />
    </div>
    <div className="flex justify-center items-center size-11 rounded-full bg-accent text-white font-semibold text-lg">J</div>
   </div>
  </header>
 );
};
