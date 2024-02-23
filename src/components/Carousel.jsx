import {Carousel} from "flowbite-react";
import data from "../assets/projects";
import frontData from "../assets/fullProjects";
export default function Contact() {
  console.log(data[0].projectArr);
  return (
    <section className=" second-home ">
      <h3 className="h3-project mb-10">Projects preview</h3>
      <div className="h-64 carusel ">
        <Carousel slideInterval={3000}>
          {frontData.map((project) => (
            <img
              key={project.key}
              src={`/bgImg/${project.bgImage}`}
              className="img-carusel"
            ></img>
          ))}
        </Carousel>
      </div>
      <div className="btn-box">
        <a href="/portfolio" className="btn mt-8">
          View Projects
        </a>
      </div>
    </section>
  );
}
