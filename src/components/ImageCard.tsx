import { FC } from "react";
import CardInfo from "./CardInfo";

interface ImageCardProps {
  clickedImage: (src: string) => void;
  like: (idx: number) => void;
  idx: number;
  imageSrc: string;
  isChecked: boolean;
}

const ImageCard: FC<ImageCardProps> = (props) => {
  const { like, clickedImage, idx, imageSrc, isChecked } = props;

  return (
    <div key={idx} className="mb-4 rounded-xl relative">
      <img
        src={imageSrc}
        alt="gallery"
        className=" cursor-pointer rounded-xl"
        loading="lazy"
        onClick={(e) => clickedImage(imageSrc)}
      ></img>
      <CardInfo like={like} idx={idx} isChecked={isChecked} />     
    </div>
  );
};

export default ImageCard;
