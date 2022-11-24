
import './App.css';
import './styles/main.css';
import MainPage from './pages/main_page/main_page.js';
import Header from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkPge from './pages/main_page/sections/work_section';
import ProjectsPage from './pages/project_page/projects_page';
import Footer from './components/footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/not_found_page/not_found_page';
import PhotographyPage from './pages/photography_page/photography_page';
import ContactPage from './pages/contact_page/contact_page';
import ProjectDetailPage from './pages/project_detail_page/project_detail_page';
function App() {
  return (
    <div className='d-flex flex-column' style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Header />
        <div style={{ flex: 1 }}>

          <Routes>
            <Route
              path="/home"
              element={<Navigate to="/" />}
            />
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/photography"
              element={<PhotographyPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/project/:slug/detail"
              element={<ProjectDetailPage />}
            />
            <Route
              path="/*"
              element={<NotFound />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
