import React, { useState } from 'react';
import profileImage from '../assets/images/yo.jpeg'; // Asegúrate de que esta ruta sea correcta

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (e) => {
    setMenuOpen(false);
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative flex flex-col items-center text-center p-6 rounded-lg mx-auto max-w-md">
      {/* Botón móvil */}
      <div className="sm:hidden flex justify-between w-full mb-6">
        <button
          className="text-white hover:bg-indigo-600 p-2 rounded-md"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay oscuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menú lateral deslizable */}
      <nav
        className={`fixed top-0 left-0 h-full bg-gray-900 z-50 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 w-64 flex flex-col p-6 sm:hidden`}
      >
        <button
          className="self-end text-white mb-6"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <a
          href="#about"
          className="text-white font-semibold hover:bg-indigo-600 py-2 px-4 rounded-md mb-2"
          onClick={handleLinkClick}
        >
          Tecnologías
        </a>
        <a
          href="#experiences"
          className="text-white font-semibold hover:bg-indigo-600 py-2 px-4 rounded-md mb-2"
          onClick={handleLinkClick}
        >
          Experiencias
        </a>
        <a
          href="#projects"
          className="text-white font-semibold hover:bg-indigo-600 py-2 px-4 rounded-md mb-2"
          onClick={handleLinkClick}
        >
          Proyectos
        </a>
        <a
          href="#formation"
          className="text-white font-semibold hover:bg-indigo-600 py-2 px-4 rounded-md mb-2"
          onClick={handleLinkClick}
        >
          Formación
        </a>
        <a
          href="#contact"
          className="text-white font-semibold hover:bg-indigo-600 py-2 px-4 rounded-md mb-2"
          onClick={handleLinkClick}
        >
          Contáctame
        </a>
      </nav>

      {/* Sección de perfil */}
      <div className="profile flex flex-col items-center mb-6">
        <img
          src={profileImage}
          alt="Kenywer"
          className="w-32 h-32 rounded-full border-4 border-white mb-4 object-cover"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          <span className="typing-animation">Kenywer Santos</span>
        </h1>
        <p className="text-white text-sm sm:text-base">
          Técnico en Computación e Informática, Desarrollador Web, de Valparaíso, Chile
        </p>
      </div>

      {/* Botón de disponibilidad */}
      <button className="bg-indigo-500 text-white font-semibold rounded-full px-4 py-2 transition-all transform hover:scale-105 text-sm sm:text-base">
        Disponible para trabajar
      </button>

      {/* Redes sociales */}
      <div className="social-links flex space-x-6 mt-6">
        <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt="GitHub" className="hover:scale-110 transition-all" />
        </a>
        <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png" alt="LinkedIn" className="hover:scale-110 transition-all" />
        </a>
        <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new.png" alt="Instagram" className="hover:scale-110 transition-all" />
        </a>
      </div>

      {/* Botón de "Ir arriba" */}
      <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-all"
      >
        ↑
      </button>
    </div>
    </header>
  );
}

export default Header;
