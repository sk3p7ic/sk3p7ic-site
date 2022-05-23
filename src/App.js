import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/navbar/navbar";
import { NavProvider } from "./contexts/NavContext";
import { HomePage } from "./pages/home/home";

function App() {
  return (
    <NavProvider>
      <div className="w-full h-full flex flex-col">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </div>
    </NavProvider>
  );
}

export default App;
