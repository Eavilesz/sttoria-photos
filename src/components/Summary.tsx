import { useContext, useEffect } from "react";
import { ImageContext } from "../context";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SummaryRow from "./SummaryRow";

const Summary: React.ComponentType = () => {
  const { pathname } = useLocation();

  const imageList = useContext(ImageContext);

  const selectedImages = imageList.filter((val) => val.isLiked === true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-900">
        <div className="container md:w-2/3 mx-auto">
          {selectedImages.map((image, idx) => (
            <SummaryRow
              src={image.src}
              comment={image.comment}
              key={idx}
              isPrinted={image.isPrinted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Summary;
