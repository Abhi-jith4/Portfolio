import { useLocation, useRoutes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Project } from './pages/Project';
import { TopNav } from './components/TopNav';
import { PageTransition } from './components/PageTransition';

export default function App() {
  const location = useLocation();

  const element = useRoutes(
    [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/info', element: <Navigate to="/about" replace /> },
      { path: '/projects/:slug', element: <Project /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
    location
  );

  return (
    <>
      <TopNav />
      <PageTransition locationKey={location.pathname}>
        {element}
      </PageTransition>
    </>
  );
}
