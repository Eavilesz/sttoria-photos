import { FC } from "react";

interface SummaryRowProps {
  src: string;
  comment: string;
  isPrinted: boolean;
}

const SummaryRow: FC<SummaryRowProps> = (props) => {
  const { src, comment, isPrinted } = props;
  return (
    <div className="grid md:grid-cols-4 border-b border-slate-500 text-slate-200 ">
      <div className="p-2">
        <img src={src} alt="girl" className="rounded-2xl" />
      </div>
      <div className="flex justify-center items-center">
        {src.split("%2F")[1].split("?alt")[0]}
      </div>
      <div
        className={`flex justify-center items-center ${
          comment ? "" : "text-red-500"
        } `}
      >
        {comment ? comment : "Sin comentarios"}
      </div>
      <div className="flex justify-center items-center">
        {isPrinted && "Álbum"}
      </div>
    </div>
  );
};

export default SummaryRow;
