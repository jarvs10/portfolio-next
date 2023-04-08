import About from "@/components/About";
import Developer from "@/components/Developer";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row justify-between items-center mt-10">
        <h1 className="text-4xl font-semibold mb-4 md:mb-0 md:ml-14">Jaiber Restrepo</h1>

        <Navbar />
      </section>

      {/* Seccion de Developer */}
      <Developer />

      {/* Seccion de About me */}
      <About />

      {/* Seccion Experiencia */}
      <div className="mt-20 flex justify-end">
        <img
          className="w-12"
          src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/arrow.png?raw=true"
          alt="arrow"
        />
      </div>

      <Experience />

      {/* Seccion de Proyectos */}
      <div className="mt-20 flex justify-end">
        <img
          className="w-12"
          src="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2/blob/main/assets/arrow.png?raw=true"
          alt="arrow"
        />
      </div>

      <Projects />
    </Layout>
  );
}
