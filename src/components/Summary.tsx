import { FC, useContext } from "react";
import { ImageContext } from "../context";
import Navbar from "./Navbar";

const Summary: FC = () => {
  const imageList = useContext(ImageContext);
  console.log("%cimageList: %o", "color: #10B981 ;", imageList);
  const selectedImages = imageList.filter((val) => val.isLiked === true);

  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-900">
        <div className="container w-1/2 mx-auto">
          {selectedImages.map((image) => (
            <div className="grid grid-cols-3 border-b border-slate-500 text-slate-200 ">
              <div className="p-2">
                <img src={image.src} alt="girl" className="rounded-2xl" />
              </div>
              <div className="flex justify-center items-center">
                {image.src.split("%2F")[1].split("?alt")[0]}
              </div>
              <div
                className={`flex justify-center items-center ${
                  image.comment ? "" : "text-red-500"
                } `}
              >
                {image.comment ? image.comment : "Sin comentarios"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Summary;
