import React, { Dispatch, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidationMessage from "./ValidationMessage";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  user: string;
};

interface ImageProps {
  setImageList: Dispatch<
    React.SetStateAction<{ src: string; isLiked: boolean; comment: string }[]>
  >;
}

const Login: React.ComponentType<ImageProps> = (props) => {
  const validationMessages: { invalidUsername: string; noUsername: string } = {
    invalidUsername: "*Invalid username!",
    noUsername: "*Please provida a username!",
  };

  const { setImageList } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [isUserValid, setIsUserValid] = useState(true);

  const userValidation = (user: string): boolean => {
    if (user === "cliente-1" || user === "cliente-2") {
      return true;
    }
    return false;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userValidation(data.user)) {
      setImageList([]);
      navigate(`main/${data.user}`);
    }
    setIsUserValid(false);
    return;
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="rounded px-8">
            <div className="mb-4">
              <label className="block text-yellow-300 text-lg font-bold mb-2">
                Username
              </label>
              <input
                {...register("user", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Button
            </button>
          </form>
          {errors.user && (
            <ValidationMessage message={validationMessages.noUsername} />
          )}
          {!isUserValid && (
            <ValidationMessage message={validationMessages.invalidUsername} />
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
