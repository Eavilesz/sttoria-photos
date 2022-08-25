import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar: React.ComponentType = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const clientFromStorage = localStorage.getItem("client");

  return (
    <nav className="bg-black border-gray-200 px-2 sm:px-20 py-2.5  dark:bg-gray-900 sticky top-0 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Sttoria
        </span>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-row items-stretch justify-center md:space-x-8  md:text-xl md:font-medium">
            <li
              className={`border-b-4 md:border-0 border-gray-100 flex items-center ${
                pathname.includes("main") ? "border-yellow-300" : ""
              } `}
            >
              <p
                onClick={() => navigate(`/main/${clientFromStorage}`)}
                className={`cursor-pointer block py-2 pr-4 pl-3 text-white hover:bg-gray-50 hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${
                  pathname.includes("main") ? "text-yellow-300" : ""
                } `}
              >
                Fotos digitales
              </p>
            </li>
            <li
              className={`border-b-4 md:border-0 border-gray-100 flex items-center ${
                pathname.includes("album") ? "border-yellow-300" : ""
              } `}
            >
              <Link
                to="/album"
                className={`cursor-pointer block py-2 pr-4 pl-3 text-white hover:bg-gray-50 hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${
                  pathname.includes("album") ? "text-yellow-300" : ""
                } `}
              >
                fotos del álbum
              </Link>
            </li>
            <li
              className={`border-b-4 md:border-0 border-gray-100 flex items-center ${
                pathname.includes("summary") ? "border-yellow-300" : ""
              } `}
            >
              <Link
                to="/summary"
                className={`cursor-pointer block py-2 pr-4 pl-3 text-white hover:bg-gray-50 hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 ${
                  pathname.includes("summary") ? "text-yellow-300" : ""
                } `}
              >
                Resumen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
