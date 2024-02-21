import "./home.css";
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

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            quidem amet vel, voluptas earum velit pariatur modi nihil quasi
            dignissimos nam asperiores officiis quam explicabo at quia
            consequuntur culpa magni.
          </p>

          <div className="btn-box">
            <a href="/portfolio" className="btn">
              My Projects
            </a>
          </div>
        </div>
        <div className="home-img"></div>
      </section>
    </>
  );
}
