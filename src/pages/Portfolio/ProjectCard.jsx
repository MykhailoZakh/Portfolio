import {Card} from "flowbite-react";
import {FaGithub, FaYoutube} from "react-icons/fa";
import {MdOnlinePrediction} from "react-icons/md";
import {Link} from "react-router-dom";
export default function ProjectCard({data}) {
  return (
    <Card
      className="project-card max-w-sm   mb-8"
      imgSrc={`./bgImg/${data.bgImage}`}
      horizontal
    >
      <h3 className="name font-bold tracking-tight text-lime-300">
        {data.name}
      </h3>
      <p className="text-normal font-normal text-gray-200 border-b border-lime-200 ">
        {data.smallDesc}
      </p>
      <h4 className="header text-lime-200">My role</h4>
      <p className="text-normal font-normal text-gray-200 border-b border-lime-200">
        {data.role}
      </p>
      <h4 className="header text-lime-200">Notable Features</h4>
      <ul className="text-normal font-normal text-gray-200 list-disc  list-inside border-b border-lime-200 ">
        {data.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <h4 className=" header text-lime-200">Technologies Used</h4>
      <ul>
        {data.icons.map((ico) => (
          <img
            key={Math.floor(Math.random() * 10000)}
            className="icons"
            src={`./icons/${ico}`}
          />
        ))}
      </ul>
      <div className="btn-container">
        <a className="project-btn mr-4" href={`${data.gitLink}`}>
          <FaGithub className="btn-ico" /> <span>GitHub Repository</span>
        </a>
        {data.live && (
          <a className="project-btn" href={`${data.live}`}>
            <MdOnlinePrediction className="btn-ico" />{" "}
            <span>Deployed Website</span>
          </a>
        )}
        {data.youTubeLink && (
          <a className="project-btn" href={`${data.youTubeLink}`}>
            <FaYoutube className="btn-ico youtube" /> <span>Youtube Video</span>
          </a>
        )}
      </div>
    </Card>
  );
}
