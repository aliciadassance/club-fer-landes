import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Accueil } from './pages/Accueil';
import { Entrainements } from './pages/Entrainements';
import { Tarifs } from './pages/Tarifs';
import { Planning } from './pages/Planning';
import { LeClub } from './pages/LeClub';
import { Inscription } from './pages/Inscription';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useWindowWidth } from './hooks/useWindowWidth';

const VALID = ['accueil', 'entrainements', 'tarifs', 'planning', 'club', 'inscription'] as const;
type Route = typeof VALID[number];

function getRoute(): Route {
  const h = window.location.hash.replace('#', '') as Route;
  return VALID.includes(h) ? h : 'accueil';
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const vw = useWindowWidth();
  const isMobile = vw < 880;

  useEffect(() => {
    const handleHash = () => {
      setRoute(getRoute());
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useScrollReveal(route);

  return (
    <div style={{
      background: '#0B1216',
      color: '#9DAFB6',
      fontFamily: "'Archivo', sans-serif",
      lineHeight: '1.5',
      minHeight: '100vh',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <Nav
        route={route}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((m) => !m)}
        isMobile={isMobile}
      />

      {route === 'accueil' && <Accueil isMobile={isMobile} />}
      {route === 'entrainements' && <Entrainements isMobile={isMobile} />}
      {route === 'tarifs' && <Tarifs />}
      {route === 'planning' && <Planning />}
      {route === 'club' && <LeClub isMobile={isMobile} />}
      {route === 'inscription' && <Inscription isMobile={isMobile} />}

      <Footer />
    </div>
  );
}
