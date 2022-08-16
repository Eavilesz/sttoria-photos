import React, { FC, Dispatch, useRef } from "react";
import useOnClickOutside from "../utils/useOnClickOutside";

interface ModalProps {
  currentImage: string;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const ImageModal: FC<ModalProps> = (props) => {
  const { setIsModalOpen, currentImage } = props;

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsModalOpen(false));
  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
          <div className=" w-automx-auto ">
            <div
              ref={ref}
              className="border-0 rounded-lg shadow-lg w-full outline-none focus:outline-none relative"
            >
              <img
                className="max-h-screen rounded-xl"
                src={currentImage}
                alt="Dentista"
              ></img>
              <button
                className="text-xl text-white absolute top-0 right-0 mr-5 mt-3"
                onClick={(e) => setIsModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
        <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
};
export default ImageModal;
