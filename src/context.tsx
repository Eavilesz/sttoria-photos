import { createContext } from "react";

export const ImageContext = createContext([
  { src: "", isLiked: false, comment: "", isPrinted: false },
]);
