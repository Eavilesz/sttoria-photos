import React, { Dispatch, FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isLiked: boolean; comment: string }[]>
  >;
}

const Login: FC<ImageProps> = (props) => {
  let navigate = useNavigate();

  const { setImageList } = props;
  const [data, setData] = useState("");

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setImageList([]);
    navigate(`/main/${data}`);
    console.log("%ce: %o", "color: #C084FC ;", e);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <form onSubmit={onSubmit} className="rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-yellow-300 text-lg font-bold mb-2">
                Username
              </label>
              <input
                onChange={(e) => setData(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* <div className="mb-6">
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
