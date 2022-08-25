import { FC } from "react";
import AlbumCardInfo from "./AlbumCardInfo";

interface AlbumImageCardProps {
  clickedImage: (src: string) => void;
  print: (idx: number) => void;
  idx: number;
  imageSrc: string;
  isPrinted: boolean;
}

const AlbumImageCard: FC<AlbumImageCardProps> = (props) => {
  const { isPrinted, print, clickedImage, idx, imageSrc } = props;

  return (
    <div key={idx} className="mb-4 rounded-xl relative">
      <img
        src={imageSrc}
        alt="gallery"
        className=" cursor-pointer rounded-xl"
        loading="lazy"
        onClick={(e) => clickedImage(imageSrc)}
      ></img>
      <AlbumCardInfo print={print} idx={idx} isPrinted={isPrinted} />
    </div>
  );
};

export default AlbumImageCard;
