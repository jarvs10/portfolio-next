import React from "react";

const About = () => {
  return (
    <section className="mt-36 text-center mt">
        <p className="text-gray-700 text-lg mb-3">Get To Know More</p>
        <h1 className="text-6xl font-bold mb-20">About Me</h1>

        <div className="gridabout gap-16 items-center">
          <img
            className="rounded-3xl w-4/5 mb-8 md:mb-0 mx-auto md:w-full"
            src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/about-pic.png?raw=true"
            alt="about"
          />

          <div>
            <div className="md:grid md:grid-cols-2 mb-8 flex flex-col items-center">

              <div className="border border-black h-44 rounded-3xl w-90 w-11/12 transition-all hover:scale-105 mb-6 md:mb-0">
                <img
                  className="w-12 mx-auto pt-4"
                  src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/experience.png?raw=true"
                  alt="medal"
                />
                <p className="font-bold text-lg mt-2">Experience</p>
                <p className="text-gray-700">2+ years</p>
                <p className="text-gray-700">Frontend Development</p>
              </div>

              <div className="border border-black h-44 rounded-3xl w-11/12 transition-all hover:scale-105">
                <img
                  className="w-12 mx-auto pt-4"
                  src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/education.png?raw=true"
                  alt="users"
                />
                <p className="font-bold text-lg mt-2">Education</p>
                <p className="text-gray-700">
                  Cedesistemas FullStack Development
                </p>
                <p className="text-gray-700">Udemy curses</p>
              </div>
            </div>

            <p className="md:text-start text-gray-700 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nostrum repellendus dolorum fugit. Saepe commodi nesciunt dolores minus? Corrupti accusamus reprehenderit ipsa, in at quisquam? Libero commodi quaerat ipsa quis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, tenetur ipsa. Quas ea corporis laborum ut minima. Placeat sint doloremque voluptas aperiam.</p>
          </div>
        </div>
      </section>
  )
  
};

export default About;
