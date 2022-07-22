import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Gallery from "./Gallery";

const Main = () => {
  const [imageList, setImageList] = useState<
    { src: string; isChecked: boolean }[]
  >([]);

  const ImageListref = ref(storage, "images/");

  useEffect(() => {
    if (imageList.length === 0) {
      listAll(ImageListref).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, { src: url, isChecked: false }]);
          });
        });
      });
    }
  });

  return <Gallery imageList={imageList} setImageList={setImageList} />;
};
export default Main;
