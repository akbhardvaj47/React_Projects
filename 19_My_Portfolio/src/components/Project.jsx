import React from 'react';
import employeeImage from '../assets/th.jpeg';

const project = [
  {
    id: 1,
    name: 'Amit Bhardwaj',
    technologies: 'Front End',
    image: employeeImage,
    github: '',
  },
  {
    id: 2,
    name: 'Amit Bhardwaj',
    technologies: 'Front End',
    image: employeeImage,
    github: '',
  },
  {
    id: 3,
    name: 'Amit Bhardwaj',
    technologies: 'Front End',
    image: employeeImage,
    github: '',
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center md:space-x-12 mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 px-6 py-8 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              {project.github ? (
                <a
                  href={project.github}
                  className="mt-4 inline-block hover:text-blue-500 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              ) : (
                <p className="text-gray-500 mt-4">No GitHub link available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
