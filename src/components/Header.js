import React, { useState } from 'react';
import profileImage from '../assets/images/yo.jpeg'; // Asegúrate de que esta ruta sea correcta

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex flex-col items-center text-center p-6 rounded-lg mx-auto max-w-md">
      {/* Menú de navegación - Botón móvil */}
      <div className="sm:hidden flex justify-end w-full mb-6">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menú de navegación - Enlaces */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:space-x-6 mb-6 text-white font-semibold`}
      >
        <a
          href="#about"
          className="hover:bg-indigo-600 hover:scale-105 transition-all py-2 px-4 rounded-md"
        >
          Tecnologías
        </a>
        <a
          href="#experiences"
          className="hover:bg-indigo-600 hover:scale-105 transition-all py-2 px-4 rounded-md"
        >
          Experiencias
        </a>
        <a
          href="#projects"
          className="hover:bg-indigo-600 hover:scale-105 transition-all py-2 px-4 rounded-md"
        >
          Proyectos
        </a>
        <a
          href="#formation"
          className="hover:bg-indigo-600 hover:scale-105 transition-all py-2 px-4 rounded-md"
        >
          Formación
        </a>
        <a
          href="#contact"
          className="hover:bg-indigo-600 hover:scale-105 transition-all py-2 px-4 rounded-md"
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
      <button className="bg-indigo-500 text-white font-semibold rounded-full px-2 py-2 transition-all transform hover:scale-105 text-xs xs:text-base">
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
    </header>
  );
}

export default Header;
