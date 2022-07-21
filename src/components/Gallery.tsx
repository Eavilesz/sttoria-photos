import React, { FC, useState, Dispatch } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import ImageModal from "./ImageModal";

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
            <div key={idx} className="mb-4 rounded-xl relative">
              <img
                src={image.src}
                alt="gallery"
                className=" cursor-pointer rounded-xl"
                loading="lazy"
                onClick={(e) => clickedImage(image.src)}
              ></img>
              <div className="flex absolute bottom-0 top-100 bg-gray-600 w-full h-10 rounded-lg justify-center">
                <div className={`flex my-1.5 lg:my-1.5 w-4/5 justify-center`}>
                  {image.isChecked ? (
                    <>
                      <div onClick={(e) => like(idx)}>
                        <AiFillHeart
                          className="cursor-pointer"
                          color="MediumVioletRed"
                          size={"1.75rem"}
                        />
                      </div>
                      <div>
                        <AiOutlineMessage
                          className="ml-2"
                          color="lightgrey"
                          size={"1.75rem"}
                        />
                      </div>
                      <input
                        placeholder="Escriba un comentario"
                        className=" ml-4 bg-slate-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      ></input>
                    </>
                  ) : (
                    <div onClick={(e) => like(idx)}>
                      <AiOutlineHeart
                        className="cursor-pointer "
                        color="lightgrey"
                        size={"1.75rem "}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Gallery;
