import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";

interface CardInfoProps {
  like: (idx: number) => void;
  commenting: (idx: number, input: string) => void;
  idx: number;
  isLiked: boolean;
  comment: string;
}

const CardInfo: React.ComponentType<CardInfoProps> = (props) => {
  const { like, idx, isLiked, commenting, comment } = props;

  return (
    <div className="flex absolute bottom-0 top-100 bg-gray-600 w-full h-10 rounded-lg justify-center">
      <div className={`flex my-1.5 lg:my-1.5 w-4/5 justify-center`}>
        {isLiked ? (
          <>
            <div onClick={(e) => like(idx)}>
              <AiFillHeart
                className="cursor-pointer"
                color="MediumVioletRed"
                size={"1.75rem"}
              />
            </div>
            <div>
              <AiOutlineMessage
                className="ml-2"
                color="lightgrey"
                size={"1.75rem"}
              />
            </div>
            <input
              value={comment}
              onChange={(e) => commenting(idx, e.target.value)}
              placeholder="Escriba un comentario"
              className=" ml-4 bg-slate-200 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            ></input>
          </>
        ) : (
          <div onClick={(e) => like(idx)}>
            <AiOutlineHeart
              className="cursor-pointer"
              color="lightgrey"
              size={"1.75rem"}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default CardInfo;
