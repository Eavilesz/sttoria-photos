import { useEffect, useContext } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import { Dispatch, FC } from "react";
import Gallery from "./Gallery";
import { ImageContext } from "../context";
import Navbar from "./Navbar";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isLiked: boolean; comment: string }[]>
  >;
}

const Main: FC<ImageProps> = (props) => {
  const { setImageList } = props;

  const imageList = useContext(ImageContext);

  const params = useParams();

  const ImageListRef = ref(storage, `${params.client}`);

  if (params.client !== "cliente-1" && params.client !== "cliente-2") {
    throw new Error("Client doesn't exist!");
  }

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
      <Gallery setImageList={setImageList} />
    </>
  );
};
export default Main;
