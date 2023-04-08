import React from "react";

const Experience = () => {
  return (
    <section className="mt-20 mb-10">
      <p className="text-gray-700 text-lg text-center mb-4">Explore My</p>
      <h1 className="text-5xl font-bold text-center mb-12">Experience</h1>

      <div className="md:grid md:gap-10 md:grid-cols-2 gap-8 md:mb-0 flex flex-col w-11/12 md:w-full mx-auto">
        <div className="border border-gray-400 py-10 rounded-3xl transition-all hover:scale-105">
          <h2 className="text-center text-gray-700 font-bold text-3xl mb-10">Frontend Development</h2>
          <ul className="grid grid-cols-2 text-center list-disc list-inside">
            <li className="mb-6 text-xl font-bold">HTML</li>
            <li className="mb-6 text-xl font-bold">CSS</li>
            <li className="mb-6 text-xl font-bold">SASS</li>
            <li className="mb-6 text-xl font-bold">JavaScript</li>
            <li className="mb-6 text-xl font-bold">BOOTSTRAP</li>
            <li className="mb-6 text-xl font-bold">ReactJs</li>
          </ul>
        </div>

        <div className="border border-gray-400 py-10 rounded-3xl transition-all hover:scale-105">
          <h2 className="text-center text-gray-700 font-bold text-3xl mb-10">Backend Development</h2>
          <ul className="grid grid-cols-2 text-center list-disc list-inside">
            <li className="mb-6 text-xl font-bold">SQL</li>
            <li className="mb-6 text-xl font-bold">MySql</li>
            <li className="mb-6 text-xl font-bold">PostGress</li>
            <li className="mb-6 text-xl font-bold">Git</li>
            <li className="mb-6 text-xl font-bold">Node Js</li>
            <li className="mb-6 text-xl font-bold">Express Js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
