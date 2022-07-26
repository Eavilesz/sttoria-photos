import { useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import { Dispatch, FC } from "react";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

interface ImageProps {
  imageList: { src: string; isLiked: boolean; comment: string }[];
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isLiked: boolean; comment: string }[]>
  >;
}

const Main: FC<ImageProps> = (props) => {
  const { imageList, setImageList } = props;

  const params = useParams();

  const ImageListRef = ref(storage, `${params.client}`);

  useEffect(() => {
    if (imageList.length === 0) {
      listAll(ImageListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [
              ...prev,
              { src: url, isLiked: false, comment: "" },
            ]);
          });
        });
      });
    }
  });

  return (
    <>
      <Navbar />
      <div className="bg-black"></div>
      <Gallery imageList={imageList} setImageList={setImageList} />
    </>
  );
};
export default Main;
