// src/components/Formation.js
import React from 'react';

function Formation() {
  // Array de formaciones con la imagen de tu carrera
  const formations = [
    {
      title: 'TNS en Computación e Informática con Especialidad en Ciberseguridad',
      institution: 'CFT PUCV',
      year: '2022 - 2024',
      description: 'Formación técnica enfocada en el desarrollo web, administración de redes y ciberseguridad. Durante estos 2 años y medio, adquirí conocimientos profundos en protección de sistemas, gestión de redes, programación, seguridad informática, y el desarrollo tanto Front-End como Back-End.',
      image: '/assets/images/tns-ciberseguridad.jpg', // Imagen representativa de tu formación
    },
  ];

  return (
    <section id="formation" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="border-t-2 border-white mb-8"></div>
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">Mi Formación Académica</h2>

      {/* Línea divisoria */}
      <div className="border-t-2 border-white mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl bg-white bg-opacity-10 flex flex-col"
          >
            <img
              src={formation.image}
              alt={formation.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-4">{formation.title}</h3>
              <p className="text-gray-300 mb-4">{formation.institution}</p>
              <p className="text-gray-300 mb-4">{formation.year}</p>
              <p className="text-gray-300 mb-4 flex-grow">{formation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formation;
