import { useNavigation } from "../../contexts/NavContext";
import "./navbar.css";

const PAGES = ["home", "projects", "contact"];

export const NavbarComponent = () => {
  const { currentPage, setCurrentPage } = useNavigation();
  return (
    <div className="w-screen px-32 flex justify-between items-center">
      <div className="px-12 py-8 bg-stone-900 text-stone-100">
        <h1 className="font-tech text-5xl">sk3p7ic</h1>
      </div>

      <div className="flex gap-8">
        {PAGES.map((page, i) => (
          <button className={currentPage === page ? "underline" : ""} key={i}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
