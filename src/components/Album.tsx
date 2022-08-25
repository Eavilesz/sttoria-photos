import React, { FC, useState, Dispatch, useContext } from "react";
import ImageModal from "./ImageModal";
import Navbar from "./Navbar";
import { ImageContext } from "../context";
import AlbumImageCard from "./AlbumImageCard";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<
      { src: string; isLiked: boolean; comment: string; isPrinted: boolean }[]
    >
  >;
}

const Album: FC<ImageProps> = (props) => {
  const { setImageList } = props;
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const imageList = useContext(ImageContext);

  const clickedImage = (src: string): void => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const print = (idx: number): void => {
    setImageList(
      imageList
        .slice(0, idx)
        .concat([
          {
            src: imageList[idx].src,
            isLiked: imageList[idx].isLiked,
            comment: imageList[idx].comment,
            isPrinted: !imageList[idx].isPrinted,
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
      <Navbar />
      <div className="sm:columns-2 lg:columns-3 px-4">
        {imageList.length > 0 &&
          imageList.map(
            (image, idx) =>
              image.isLiked && (
                <AlbumImageCard
                  key={idx}
                  imageSrc={image.src}
                  idx={idx}
                  print={print}
                  clickedImage={clickedImage}
                  isPrinted={image.isPrinted}
                />
              )
          )}
      </div>
    </>
  );
};
export default Album;
