import { FC } from "react";
import CardInfo from "./CardInfo";

interface ImageCardProps {
  clickedImage: (src: string) => void;
  like: (idx: number) => void;
  comment: (idx: number, input: string) => void;
  idx: number;
  imageSrc: string;
  isLiked: boolean;
}

const ImageCard: FC<ImageCardProps> = (props) => {
  const { like, clickedImage, idx, imageSrc, isLiked, comment } = props;

  return (
    <div key={idx} className="mb-4 rounded-xl relative">
      <img
        src={imageSrc}
        alt="gallery"
        className=" cursor-pointer rounded-xl"
        loading="lazy"
        onClick={(e) => clickedImage(imageSrc)}
      ></img>
      <CardInfo comment={comment} like={like} idx={idx} isLiked={isLiked} />
    </div>
  );
};

export default ImageCard;
