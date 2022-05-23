import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/navbar/navbar";
import { NavProvider } from "./contexts/NavContext";
import { ContactPage } from "./pages/contact/Contact";
import { HomePage } from "./pages/home/home";
import { ProjectsPage } from "./pages/projects/Projects";

function App() {
  return (
    <NavProvider>
      <div className="w-full h-full flex flex-col">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </NavProvider>
  );
}

export default App;
