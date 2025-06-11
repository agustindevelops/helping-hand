import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer powerful and modular AI building blocks to suit your specific goals. All services are customizable and designed for real-world scalability.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Model Context Protocol (MCPs)</h3>
              <p className="mt-3 text-gray-600">
                Custom-built backend logic layers that turn user input into smart actions. Easily plug into apps, dashboards, or APIs.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple-100 text-purple-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">AI Fine-Tuning & Custom Models</h3>
              <p className="mt-3 text-gray-600">
                Train or fine-tune models on proprietary data. OpenAI, Hugging Face, and other frameworks supported.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-pink-100 text-pink-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Agent & Tool Orchestration</h3>
              <p className="mt-3 text-gray-600">
                Systems that coordinate multiple AI tools and tasks. Perfect for workflows that require multi-step or multi-agent execution.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">AI System Architecture</h3>
              <p className="mt-3 text-gray-600">
                End-to-end infrastructure with AWS, VPCs, Docker, EventBridge, and Terraform. Designed for affordability and high availability.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">AI Consultation & Prototyping</h3>
              <p className="mt-3 text-gray-600">
                MVP design, validation, and implementation support. Workshops for team enablement and AI integration planning.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6 text-white">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white text-indigo-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Custom AI Solutions</h3>
              <p className="mt-3 text-gray-100">
                Don't see what you need? We build custom AI solutions tailored to your unique business challenges.
              </p>
              <button className="mt-6 px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;