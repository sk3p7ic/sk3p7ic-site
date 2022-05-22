import "./navbar.css";
export const NavbarComponent = () => {
  return (
    <div className="w-screen px-32 flex justify-between items-center">
      <div className="px-12 py-8 bg-stone-900 text-stone-100">
        <h1 className="font-tech text-5xl">sk3p7ic</h1>
      </div>

      <div className="flex gap-8">
        <a href="#">home</a>
        <a href="#">projects</a>
        <a href="#">contact</a>
      </div>
    </div>
  );
};
