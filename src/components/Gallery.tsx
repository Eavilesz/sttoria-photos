import React, { FC, useState, Dispatch, useContext } from "react";
import ImageModal from "./ImageModal";
import { ImageContext } from "../context";
import ImageCard from "./ImageCard";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<
      { src: string; isLiked: boolean; comment: string; isPrinted: boolean }[]
    >
  >;
}

const Gallery: FC<ImageProps> = (props) => {
  const { setImageList } = props;
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const imageList = useContext(ImageContext);

  const clickedImage = (src: string): void => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const like = (idx: number): void => {
    setImageList(
      imageList
        .slice(0, idx)
        .concat([
          {
            src: imageList[idx].src,
            isLiked: !imageList[idx].isLiked,
            comment: imageList[idx].comment,
            isPrinted: imageList[idx].isPrinted,
          },
        ])
        .concat(imageList.slice(idx + 1, imageList.length))
    );
  };

  const commenting = (idx: number, input: string): void => {
    setImageList(
      imageList
        .slice(0, idx)
        .concat([
          {
            src: imageList[idx].src,
            isLiked: imageList[idx].isLiked,
            comment: input,
            isPrinted: imageList[idx].isPrinted,
          },
        ])
        .concat(imageList.slice(idx + 1, imageList.length))
    );
  };

  return (
    <>
      {isModalOpen && (
        <ImageModal
          setIsModalOpen={setIsModalOpen}
          currentImage={currentImage}
        />
      )}
      <div className="sm:columns-2 lg:columns-3 px-4">
        {imageList.length > 0 &&
          imageList.map((image, idx) => (
            <ImageCard
              key={idx}
              imageSrc={image.src}
              idx={idx}
              like={like}
              clickedImage={clickedImage}
              commenting={commenting}
              isLiked={image.isLiked}
              comment={image.comment}
            />
          ))}
      </div>
    </>
  );
};
export default Gallery;
