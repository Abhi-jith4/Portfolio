import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { TopNav } from './components/TopNav';
import { PageTransition } from './components/PageTransition';

export default function App() {
  const location = useLocation();

  return (
    <>
      <TopNav />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Navigate to="/about" replace />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </>
  );
}
