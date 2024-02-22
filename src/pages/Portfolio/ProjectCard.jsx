import {Card} from "flowbite-react";
export default function ProjectCard({data}) {
  // console.log(data);
  return (
    <Card
      className="project-card max-w-sm  mb-6"
      imgSrc={`./bgImg/${data.bgImage}`}
      horizontal
    >
      <h3 className="text-2xl font-bold tracking-tight text-white">
        {data.name}
      </h3>
      <p className="font-normal text-gray-200">{data.smallDesc}</p>
      <h4 className="text-white">My role</h4>
      <p className="text-gray-200">Front and Back end deweloper</p>
      <h4 className="text-white">Notable Features</h4>
      <ul className="text-gray-200">List of Features</ul>
      <h4 className="text-white">Technologies Used</h4>
      <ul>
        {data.icons.map((ico) => (
          <img
            key={Math.floor(Math.random() * 10000)}
            className="icons"
            src={`./icons/${ico}`}
          />
        ))}
      </ul>
    </Card>
  );
}
