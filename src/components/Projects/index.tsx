import { projects } from '@/data/PROJECT';
import React from 'react';
import ProjectCard from './Project/Card';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">AI in Action</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            See how our solutions are transforming businesses across industries.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>        
    </section>
  );
};

export default Projects;