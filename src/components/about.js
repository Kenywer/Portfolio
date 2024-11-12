import React from 'react';
import htmlLogo from '../assets/images/html.png';
import cssLogo from '../assets/images/css.png';
import jsLogo from '../assets/images/javascript.png';
import reactLogo from '../assets/images/react.png';
import tailwindLogo from '../assets/images/tailwind.png';
import bootstrapLogo from '../assets/images/bootstrap.png';
import laravelLogo from '../assets/images/laravel.png';
import mysqlLogo from '../assets/images/mysql.png';
import phpLogo from '../assets/images/php.png';
import nodejsLogo from '../assets/images/nodejs.png';
import githubLogo from '../assets/images/github.png';  // Asegúrate de agregar la imagen de GitHub en tu carpeta de assets

function About() {
  const technologies = [
    { name: 'HTML', logo: htmlLogo, level: 'Intermedio' },
    { name: 'CSS', logo: cssLogo, level: 'Intermedio' },
    { name: 'JavaScript', logo: jsLogo, level: 'Intermedio' },
    { name: 'React', logo: reactLogo, level: 'Básico' },
    { name: 'Tailwind CSS', logo: tailwindLogo, level: 'Intermedio' },
    { name: 'Bootstrap', logo: bootstrapLogo, level: 'Intermedio' },
    { name: 'Laravel', logo: laravelLogo, level: 'Intermedio' },
    { name: 'MySQL', logo: mysqlLogo, level: 'Intermedio' },
    { name: 'PHP', logo: phpLogo, level: 'Intermedio' },
    { name: 'Node.js', logo: nodejsLogo, level: 'Básico' },
    { name: 'GitHub', logo: githubLogo, level: 'Básico' },  // Agregando GitHub
  ];

  return (
    <section id="about" className="text-center py-12 max-w-4xl mx-auto">
      <div className="border-t-2 border-white mb-8"></div>
      <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
        Tecnologías
      </h2>
      <p className="text-lg text-gray-200 mb-8 max-w-md mx-auto">
        Estas son algunas de las tecnologías que utilizo en mi desarrollo web.
      </p>
      <div className="border-t-2 border-white mb-8"></div>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl w-24 md:w-32"
          >
            <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-3 mx-auto" />
            <span className="text-xl font-semibold text-white">{tech.name}</span>
            <span className="text-gray-300 opacity-75 mt-1">{tech.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
