import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps {
 icon: IconDefinition;
 variant: "noBg" | "withBg";
 size?: "sm" | "md" | "lg" | "xl";
 direction?: string;
 onClick: (direction?: string) => void;
}

export const IconButton = ({ icon, size = "lg", variant, direction, onClick }: IconButtonProps) => {
 const sizeClass: { [key: string]: string } = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
 };

 const variantClass: { [key: string]: string } = {
  noBg: "bg-none text-white",
  withBg: "text-accent bg-white",
 };

 return (
  <button onClick={() => onClick(direction)} className={`${sizeClass[size]} ${variantClass[variant]} ${icon.iconName === 'play' && 'pl-1'} flex justify-center items-center rounded-full`}>
   <FontAwesomeIcon icon={icon} size="lg" />
  </button>
 );
};
