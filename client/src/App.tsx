import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    if (['about', 'services', 'work', 'contact'].includes(hash)) {
      return hash;
    }
    const path = window.location.pathname.replace('/', '').toLowerCase();
    if (['about', 'services', 'work', 'contact'].includes(path)) {
      return path;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage());
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (page: string, service?: string) => {
    setCurrentPage(page);
    if (service) {
      setSelectedService(service);
    }
    window.location.hash = `#/${page === 'home' ? '' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAFB', color: '#0F172A', display: 'flex', flexDirection: 'column' }}>
      {/* Top Multi-Page Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={() => navigateTo('contact')}
      />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectService={(svc) => navigateTo('contact', svc)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialService={selectedService}
          />
        )}
      </main>

      {/* Global Footer with Subpage Links */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
