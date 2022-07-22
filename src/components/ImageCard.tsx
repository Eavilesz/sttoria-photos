import { FC } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";

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
      <div className="flex absolute bottom-0 top-100 bg-gray-600 w-full h-10 rounded-lg justify-center">
        <div className={`flex my-1.5 lg:my-1.5 w-4/5 justify-center`}>
          {isChecked ? (
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
  );
};

export default ImageCard;
