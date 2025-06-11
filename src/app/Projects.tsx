import React from 'react';

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
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Event Music Timeline Tool</h3>
              <p className="mt-3 text-gray-600">
                A mobile app that syncs Spotify with a digital event schedule — replacing DJs with automation.
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">Mobile App</span>
                <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Spotify API</span>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Automation</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">On-Device Food Tracking</h3>
              <p className="mt-3 text-gray-600">
                A mobile app using vision + voice to track meals with AI, no internet needed.
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Computer Vision</span>
                <span className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">On-Device AI</span>
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Voice Recognition</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Translation API</h3>
              <p className="mt-3 text-gray-600">
                A multi-language translator that queues user input and generates natural-sounding speech via TTS.
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">NLP</span>
                <span className="px-2 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">API</span>
                <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">Text-to-Speech</span>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="h-48 bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">E-Commerce AI Assistant</h3>
              <p className="mt-3 text-gray-600">
                An AI agent that helps store owners generate product descriptions, tag items, and handle customer questions.
              </p>
              <div className="mt-4 flex space-x-2">
                <span className="px-2 py-1 text-xs font-medium bg-pink-100 text-pink-800 rounded-full">E-Commerce</span>
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Content Generation</span>
                <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Customer Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>        
    </section>
  );
};

export default Projects;