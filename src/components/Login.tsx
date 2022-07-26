import React, { Dispatch, FC } from "react";
import { Link } from "react-router-dom";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isLiked: boolean; comment: string }[]>
  >;
}

const Login: FC<ImageProps> = (props) => {
  const { setImageList } = props;

  return (
    <>
      <Link to="/main/cliente-1">
        <button
          onClick={(e) => setImageList([])}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Cliente 1
        </button>
      </Link>

      <Link to="/main/cliente-2">
        <button
          onClick={(e) => setImageList([])}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Cliente 2
        </button>
      </Link>
    </>
  );
};
export default Login;
