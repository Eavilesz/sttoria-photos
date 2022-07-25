import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

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

  return (
  <>
  <div className="bg-black pt-4">
    <Link to="/">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Home
      </button>
    </Link>
  </div>
    <Gallery imageList={imageList} setImageList={setImageList} />
  </>
  )
};
export default Main;
