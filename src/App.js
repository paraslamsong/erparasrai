
import './App.css';
import './styles/main.css';
import MainPage from './pages/main_page/main_page.js';
import Header from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkPge from './pages/main_page/sections/work_section';
import ProjectsPage from './pages/project_page/projects_page';
import Footer from './components/footer';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './pages/not_found_page/not_found_page';
import PhotographyPage from './pages/photography_page/photography_page';
import ContactPage from './pages/contact_page/contact_page';
import ProjectDetailPage from './pages/project_detail_page/project_detail_page';
import { AlgorithmPage } from './pages/algorithm_page/algorithm_page';
import { QueryClient, QueryClientProvider } from 'react-query';
import AlgorithmDetailPage from './pages/algorithm_detail_page/algorithm_detail_page';
import { HobbiesPage } from './pages/hobbies_page/hobbies_page';
import { HobbyDetailPage } from './pages/hobby_detail_page/hobby_detail_page';
import { useEffect } from 'react';

const queryClient = new QueryClient()

function Navigation() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
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
          path="/project/:slug/detail"
          element={<ProjectDetailPage />}
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
          path="/algorithms"
          element={<AlgorithmPage />}
        />
        <Route
          path="/algorithm/:slug/detail"
          element={<AlgorithmDetailPage />}
        />
        <Route
          path="/hobbies"
          element={<HobbiesPage />}
        />
        <Route
          path="/hobby/:slug/detail"
          element={<HobbyDetailPage />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </div>);

}
function App() {
  return (
    <div className='d-flex flex-column' style={{ minHeight: "100vh" }}>

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Navigation />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>

    </div>
  );
}

export default App;
