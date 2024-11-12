import React from 'react';

import alfaroRepuestosImage from '../assets/images/alfaro-repuestos.png';
import laravelImage from '../assets/images/laravel.png';
import phpImage from '../assets/images/php.png';
import javascriptImage from '../assets/images/javascript.png';
import htmlImage from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import tailwindImage from '../assets/images/tailwind.png';
import nodejsImage from '../assets/images/nodejs.png';
import reactImage from '../assets/images/react.png';
import portafolio from '../assets/images/portafolio.png';

function Projects() {
  // Array de proyectos con las imágenes importadas
  const projects = [
    {
      title: 'Alfaro Repuestos',
      description: 'Desarrollé la página web para Alfaro Repuestos, optimizando la experiencia del usuario y mejorando la eficiencia en el proceso de compra en línea.',
      link: 'https://alfarorepuestos.cl',
      github: 'https://github.com/Kenywer/web-alfaro',
      image: alfaroRepuestosImage,  // Usar la imagen importada
      technologies: [
        { name: 'Laravel', image: laravelImage },
        { name: 'PHP', image: phpImage },
        { name: 'JavaScript', image: javascriptImage },
        { name: 'HTML', image: htmlImage },
        { name: 'CSS', image: cssImage },
        { name: 'Tailwind CSS', image: tailwindImage },
        { name: 'Node.js', image: nodejsImage },
      ],
    },
    {
      title: 'Portfolio Personal',
      description: 'Desarrollé un portfolio personal para mostrar mis proyectos y habilidades en el desarrollo web.',
      link: 'https://miportfolio.com',
      github: 'https://github.com/tuusuario/portfolio',
      image: portafolio,  // Usa las rutas de imágenes o importarlas
      technologies: [
        { name: 'React', image: reactImage },
        { name: 'Node.js', image: nodejsImage },
        { name: 'Tailwind CSS', image: tailwindImage },
        { name: 'CSS', image: cssImage },
      ],
    },
    {
      title: 'Banquetería Teresa Orrego',
      description: 'Creé la página web para Banquetería Teresa Orrego, facilitando la información de los servicios de banquetería y contacto para los clientes.',
      link: 'https://banqueteriateresaorrego.cl',
      github: 'https://github.com/tuusuario/banqueteria',
      image: '/assets/images/banqueteria.jpg',  // Usa las rutas de imágenes o importarlas
      technologies: [
        { name: 'HTML', image: htmlImage },
        { name: 'CSS', image: cssImage },
        { name: 'JavaScript', image: javascriptImage },
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="border-t-2 border-white mb-8"></div>
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">Mis Proyectos</h2>

      {/* Línea divisoria */}
      <div className="border-t-2 border-white mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl bg-white bg-opacity-10 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="flex flex-col p-6 flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-4 mb-4 justify-center">
                <strong className="text-gray-400">Tecnologías usadas:</strong>
                <div className="flex justify-center gap-4">
                  {project.technologies.map((tech, index) => (
                    <img
                      key={index}
                      src={tech.image}
                      alt={tech.name}
                      className="w-8 h-8 object-contain "
                      title={tech.name}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4 gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300 text-center w-full sm:w-auto"
                >
                  Ver Proyecto
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 text-white bg-gray-800 rounded-full hover:bg-gray-600 transition-colors duration-300 text-center w-full sm:w-auto"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
