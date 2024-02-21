import {Carousel} from "flowbite-react";
import data from "../assets/projects";
export default function Contact() {
  console.log(data[0].projectArr);
  return (
    <section className=" second-home ">
      <h3 className="h3-project mb-10">Project preview</h3>
      <div className="h-64 carusel ">
        <Carousel slideInterval={3000}>
          {data[0].projectArr.map((img) => (
            <img
              key={img.key}
              src={`/bgImg/${img.bgImage}`}
              className="img-carusel"
            ></img>
          ))}
        </Carousel>
      </div>
      <div className="btn-box">
        <a href="/portfolio" className="btn mt-8">
          All Projects
        </a>
      </div>
    </section>
  );
}
