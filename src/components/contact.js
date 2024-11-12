// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="border-t-2 border-gray-300 mb-8"></div>
      <h2 className="text-4xl font-extrabold text-center mb-8 text-white">
        ¡Hablemos!
      </h2>

      {/* Línea divisoria */}
      <div className="border-t-2 border-gray-300 mb-8"></div>

      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <p className="text-lg font-semibold text-white">
          Si deseas discutir alguna idea, proyecto o consulta, no dudes en escribirme. Estoy disponible para responder todas tus dudas.
        </p>

        {/* Correo electrónico visible */}
        <p className="text-lg font-semibold text-gray-800">
          Correo electrónico: <p  className="text-white hover:underline">kenywerjss17@gmail.com</p>
        </p>

        {/* Botón para enviar correo */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:kenywerjss17@gmail.com"
            className="inline-block py-3 px-8 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105"
          >
            Envíame un correo
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="https://www.linkedin.com/in/kenywer" // Cambia por tu perfil de LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-800 hover:text-white transition-colors duration-300 transform hover:scale-110"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/kenywer" // Cambia por tu perfil de GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-800 hover:text-white transition-colors duration-300 transform hover:scale-110"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/kenywer" // Cambia por tu perfil de Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-800 hover:text-white transition-colors duration-300 transform hover:scale-110"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
