import Link from "next/link";
import React from "react";

const Developer = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row mt-40 justify-center gap-16 items-center">
        <img
          className="w-96"
          src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/profile-pic.png?raw=true"
          alt="user"
        />

        <div className="text-center">
          <p className="text-lg mb-4 font-semibold text-gray-700">Hello, I´m</p>
          <h2 className="text-4xl font-bold mb-4">Jaiber Restrepo Villa</h2>
          <h2 className="text-3xl text-gray-700 font-semibold">
            Front-End Developer
          </h2>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-white rounded-3xl border border-black py-2 px-7 font-bold hover:bg-black hover:text-white">
              Download CV
            </button>
            <button className="bg-gray-700 text-white rounded-3xl outline py-4 px-7 font-bold hover:bg-white hover:text-black">
              Contact info
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <Link
              href={"https://www.linkedin.com/in/jaiber-restrepo-84ab4b248/"}
            >
              <img
                className="w-12"
                src="https://cdn.icon-icons.com/icons2/693/PNG/512/LinkedIn_Rounded_Solid_icon-icons.com_61559.png"
                alt="linkedin"
              />
            </Link>

            <Link href={"https://github.com/jarvs10"}>
              <img
                className="w-12"
                src="https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png"
                alt="github"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  ) 
};

export default Developer;
