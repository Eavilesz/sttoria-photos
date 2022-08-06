import { useEffect, useContext, useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import { Dispatch } from "react";
import Gallery from "./Gallery";
import { ImageContext } from "../context";
import ErrorFallback from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isLiked: boolean; comment: string }[]>
  >;
}

const Main: React.ComponentType<ImageProps> = (props) => {
  const { setImageList } = props;
  const imageList = useContext(ImageContext);

  const params = useParams();

  const ImageListRef = ref(storage, `${params.client}`);

  const [doesClientExist, setDoesClientExist] = useState(true);

  useEffect(() => {
    if (params.client !== "cliente-1" && params.client !== "cliente-2") {
      setDoesClientExist(false);
    }
  }, [params.client]);

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Gallery
          setImageList={setImageList}
          doesClientExist={doesClientExist}
        />
      </ErrorBoundary>
    </>
  );
};
export default Main;
