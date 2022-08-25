import React, { useEffect, useContext } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import { Dispatch } from "react";
import { ImageContext } from "../context";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<
      { src: string; isLiked: boolean; comment: string; isPrinted: boolean }[]
    >
  >;
}

const Main: React.ComponentType<ImageProps> = (props) => {
  const { setImageList } = props;
  const imageList = useContext(ImageContext);

  const params = useParams();

  const ImageListRef = ref(storage, `${params.client}`);

  useEffect(() => {
    if (imageList.length === 0) {
      listAll(ImageListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [
              ...prev,
              { src: url, isLiked: false, comment: "", isPrinted: false },
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
