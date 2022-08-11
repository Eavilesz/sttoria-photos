import { RotateLoader } from "react-spinners";

function LoadingPage() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <RotateLoader size={100} color={"#FDE047"} />
      </div>
    </div>
  );
}

export default LoadingPage;
