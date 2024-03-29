import {Carousel} from "flowbite-react";
import "./home.css";
import ProjectCarousel from "../../components/Carousel";
export default function About() {
  return (
    <>
      <section className="home mt-5 " id="home">
        <div className="home-content">
          <h1 className="name">
            Hi, I am <span>Mykhailo</span>
          </h1>
          <div className="text-animate">
            <h3>Software Developer</h3>
          </div>

          <p>Turning ideas into real life products</p>

          <div className="btn-box">
            <a href="/resume" className="btn">
              My Resume
            </a>
          </div>
        </div>
        <div className="home-img"></div>
      </section>
      <ProjectCarousel />
    </>
  );
}
