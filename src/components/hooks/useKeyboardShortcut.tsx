import { useEffect } from "react";

interface UseKeyboardShortcutArgs {
 key: string | string[];
 onKeyPressed: () => void;
}

export const useKeyboardShortcut = ({ key, onKeyPressed }: UseKeyboardShortcutArgs) => {
 useEffect(() => {
  const keyDownHandler = (e: globalThis.KeyboardEvent) => {
   const isKeyMatch = Array.isArray(key) ? key.includes(e.code) : e.code === key;
   if (isKeyMatch) {
    e.preventDefault();
    onKeyPressed();
   }
  };

  document.addEventListener("keydown", keyDownHandler);

  return () => {
   document.removeEventListener("keydown", keyDownHandler);
  };
 }, [key, onKeyPressed]);
};
