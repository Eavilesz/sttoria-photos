import React, { FC, useState, Dispatch } from "react";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";

interface ImageProps {
  imageList: { src: string; isChecked: boolean }[];
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isChecked: boolean }[]>
  >;
}

const Gallery: FC<ImageProps> = (props) => {
  const { imageList, setImageList } = props;
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const clickedImage = (src: string): void => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const like = (idx: number): void => {
    setImageList(
      imageList
        .slice(0, idx)
        .concat([
          { src: imageList[idx].src, isChecked: !imageList[idx].isChecked },
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
      <div className="sm:columns-2 lg:columns-3 p-4 bg-black">
        {imageList.length > 0 &&
          imageList.map((image, idx) => (
            <ImageCard
              imageSrc={image.src}
              idx={idx}
              like={like}
              clickedImage={clickedImage}
              isChecked={image.isChecked}
            />
          ))}
      </div>
    </>
  );
};
export default Gallery;
