import { useNavigate } from "react-router-dom";
import { useNavigation } from "../../contexts/NavContext";
import "./navbar.css";

const PAGES = ["home", "projects", "contact"];

export const NavbarComponent = () => {
  const { currentPage, setCurrentPage } = useNavigation();
  const routerNavigate = useNavigate();

  const doChangePage = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    routerNavigate(page, { replace: true });
  };

  const baseClasses = "transition-all hover:scale-110 ";

  return (
    <div className="w-screen lg:px-32 flex justify-between items-center">
      <div className="px-6 py-4 lg:px-12 lg:py-8 bg-stone-900 text-stone-100 lg:rounded-b-md">
        <a className="font-tech text-5xl" href="/">
          sk3p7ic
        </a>
      </div>

      <div className="flex gap-8 pr-4 lg:pr-0">
        {PAGES.map((page, i) => (
          <button
            className={baseClasses + (currentPage === page ? "underline" : "")}
            key={i}
            onClick={(e) => doChangePage(e, page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
