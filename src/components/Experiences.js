import React from 'react';

function Experiences() {
  // Aquí puedes agregar más experiencias en el futuro
  const experiences = [
    {
      title: 'Alfaro Repuestos',
      role: 'Desarrollador Web (6 meses)',
      description: `En Alfaro Repuestos diseñé y desarrollé su página web, implementando mejoras que optimizaron la experiencia del usuario y los procesos de compra en línea. 
      Como resultado, se logró un aumento significativo en las ventas y un mayor alcance a nuevos públicos, mejorando la presencia digital de la empresa.`,
    },
    // Puedes agregar más objetos de experiencia en el futuro
    // {
    //   title: 'Otro Proyecto',
    //   role: 'Desarrollador Frontend',
    //   description: 'Descripción del proyecto.',
    // },
  ];

  return (
    <section id="experiences" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="border-t-2 border-white mb-8"></div>
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">
        Mi Experiencia
      </h2>

      {/* Línea divisoria */}
      <div className="border-t-2 border-white mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl bg-white bg-opacity-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{experience.title}</h3>
            <p className="text-gray-300 mb-4">{experience.role}</p>
            <p className="text-gray-200">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
