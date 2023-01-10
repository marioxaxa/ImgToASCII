import { AsciiClass } from "./AsciiClass";

export type AppContextType = {
    imageURL: string;
    setImageURL: (url: string) => void;
    asciiObj: AsciiClass;
    setAsciiObj: (ascii: AsciiClass) => void;
  };