import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface AlbumCardInfoProps {
  print: (idx: number) => void;
  idx: number;
  isPrinted: boolean;
}

const AlbumCardInfo: React.ComponentType<AlbumCardInfoProps> = (props) => {
  const { isPrinted, print, idx } = props;

  return (
    <div className="flex absolute bottom-0 top-100 bg-gray-600 w-full h-10 rounded-b-lg justify-center">
      <div className={`flex my-1.5 lg:my-1.5 w-4/5 justify-center`}>
        {isPrinted ? (
          <div onClick={(e) => print(idx)}>
            <AiFillHeart
              className="cursor-pointer"
              color="red"
              size={"1.75rem"}
            />
          </div>
        ) : (
          <div onClick={(e) => print(idx)}>
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
export default AlbumCardInfo;
