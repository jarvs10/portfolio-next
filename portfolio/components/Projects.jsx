import React from "react";

const Projects = () => {
  return (
    <section className="text-center mt-20 mb-20">
      <p className="text-gray-700 text-lg mb-3">Browse My Recent</p>
      <h1 className="text-6xl font-bold mb-16">Projects</h1>

      <div className="md:grid md:grid-cols-3 gap-6">
        <div className="border border-gray-400 p-10 rounded-3xl transition-all hover:scale-105 w-11/12 md:w-full mx-auto mb-6 md:mb-0">
          <img
            className="rounded-3xl mb-6"
            src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/project-1.png?raw=true"
            alt="project1"
          />
          <h2 className="text-3xl font-bold text-gray-500 mb-6">Project One</h2>
          <div className="md:flex justify-center gap-3">
            <button className="border border-gray-400 font-semibold py-2 px-6 rounded-3xl hover:bg-black hover:text-white">
              GitHub
            </button>
            <button className="border border-gray-400 font-semibold py-2 px-6 rounded-3xl hover:bg-black hover:text-white">
              Live Demo
            </button>
          </div>
        </div>

        <div className="border border-gray-400 p-10 rounded-3xl transition-all hover:scale-105 w-11/12 md:w-full mx-auto mb-6 md:mb-0">
          <img
            className="rounded-3xl mb-6"
            src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/project-2.png?raw=true"
            alt="project2"
          />
          <h2 className="text-3xl font-bold text-gray-500 mb-6">Project Two</h2>
          <div className="md:flex justify-center gap-3">
            <button className="border border-gray-400 font-semibold py-2 px-6 rounded-3xl hover:bg-black hover:text-white">
              GitHub
            </button>
            <button className="border border-gray-400 font-semibold py-2 px-6 rounded-3xl hover:bg-black hover:text-white">
              Live Demo
            </button>
          </div>
        </div>

        <div className="border border-gray-400 p-10 rounded-3xl transition-all hover:scale-105 w-11/12 md:w-full mx-auto mb-6 md:mb-0">
          <img
            className="rounded-3xl mb-6"
            src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/project-3.png?raw=true"
            alt="project3"
          />
          <h2 className="text-3xl font-bold text-gray-500 mb-6">Project Three</h2>
          <div className="md:flex justify-center gap-3">
            <button className="border border-gray-400 font-semibold py-2 px-6 rounded-3xl hover:bg-black hover:text-white">
              GitHub
            </button>
            <button className="border border-gray-400 font-semibold py-2 px-6 rounded-3xl hover:bg-black hover:text-white">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
