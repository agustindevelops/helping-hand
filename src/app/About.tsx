const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            Helping Hand AI Solutions bridges the gap between ambition and execution. We build scalable, intelligent systems that free up your time, empower your users, and drive sustainable growth.
          </p>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Whether you're a startup founder or an enterprise leader, our goal is to bring clarity, speed, and confidence to your AI journey.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 rounded-xl p-8 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Implementation</h3>
            <p className="mt-2 text-gray-600">From concept to deployment in record time with our streamlined process.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-8 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Team</h3>
            <p className="mt-2 text-gray-600">Specialists in AI, systems architecture, and business integration.</p>
          </div>
          <div className="bg-pink-50 rounded-xl p-8 text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Scalable Solutions</h3>
            <p className="mt-2 text-gray-600">Systems that grow with your business needs and adapt to changing demands.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
