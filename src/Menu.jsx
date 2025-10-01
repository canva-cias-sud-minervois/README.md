import React, { useState } from 'react';
import './App.css';

export default function Menu({ onTabChange, activeTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTab = (tab) => {
    onTabChange(tab);
    setMobileOpen(false);
  };

  return (
<nav
  className="main-menu fixed top-0 left-0 right-0 py-4 px-6"
  style={{paddingBottom: '1%', zIndex: 1000 }}
>
  <div className="max-w-8xl mx-auto flex justify-between items-center">
    <button
      className="mobile-menu-button focus:outline-none"
      id="mobile-menu-button"
      onClick={() => setMobileOpen((v) => !v)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      
      
    </button>
  </div>

  <div
    className={`mobile-menu${mobileOpen ? ' show' : ''}`}
    id="mobile-menu"
  >
    <a
      href="#accueil"
      className={`menu-item${activeTab === 'all' ? ' active' : ''}`}
      onClick={() => handleTab('all')}
    >
      Accueil
    </a>
    <a
      href="#fonctionnalites"
      className={`menu-item${activeTab === 'features' ? ' active' : ''}`}
      onClick={() => handleTab('features')}
    >
      Fonctionnalités
    </a>
    <a
      href="#erreurs"
      className={`menu-item${activeTab === 'errors' ? ' active' : ''}`}
      onClick={() => handleTab('errors')}
    >
      Erreurs courantes
    </a>
    <a
    href="#ressources" 
    className={`menu-item${activeTab === 'all' ? '' : ''}`}
    onClick={() => handleTab('all')}
    >
      Ressources
    </a>
  </div>
</nav>

  );
}
