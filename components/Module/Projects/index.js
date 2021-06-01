import Card from "../../Base/Card";
const dataProject = [
  {
    title: "Tickitz",
    img: "/images/tickitz.png",
    desc: "Online cinema ticket booking website",
    github: "https://github.com/therevolt/ReactJS-FE-Tickitz",
    visit: "https://tickitz.xyz/",
  },
  {
    title: "SayHello",
    img: "/images/sayhello.png",
    desc: "Chat website with various realtime features",
    github: "https://github.com/therevolt/FE-SayHello",
    visit: "https://shello.netlify.app/",
  },
  {
    title: "ARVA SHOP",
    img: "/images/arva.png",
    desc: "Online shopping website",
    github: "https://github.com/therevolt/arva-online-shop",
    visit: "https://arva-online-shop-theta.vercel.app/",
  },
  {
    title: "ZWALLET",
    img: "/images/zwallet.png",
    desc: "Digital wallet website",
    github: "https://github.com/therevolt/Zwallet-Frontend",
    visit: "https://zwallet-new.vercel.app/",
  },
  {
    title: "InCafe",
    img: "/images/incafe.png",
    desc: "Food and drink ordering website",
    github: "https://github.com/therevolt/In-Cafe",
    visit: "https://incafe.netlify.app/Home",
  },
];

const dataProjectOther = [
  {
    title: "IMDB Scrapper",
    img: "/images/imdb.png",
    desc: "Scrapper IMDb Detail Movie",
    github: "https://github.com/therevolt/scrapper-imdb",
    visit: "https://github.com/therevolt/scrapper-imdb",
  },
  {
    title: "404 Not Found Page",
    img: "/images/404.png",
    desc: "Design for Error 404 Not Found Page",
    github: "https://github.com/therevolt/404nf-dev-challenges",
    visit: "https://github.com/therevolt/404nf-dev-challenges",
  },
  {
    title: "Dynamic Background Site",
    img: "/images/animate.png",
    desc: "Built with anime.js",
    github: "https://github.com/therevolt/AnimateJS",
    visit: "https://animate-js.netlify.app",
  },
];

const Projects = () => {
  return (
    <>
      <div className="icon my-3">
        <img src="/images/project.png" alt="" width="20" />
        <span> Website</span>
      </div>
      <div className="d-flex flex-wrap justify-content-center mx-4">
        {dataProject.map((item) => {
          return (
            <Card className="text-center card position-relative my-2 mx-2" project>
              <span className="fw-bold">{item.title}</span>
              <hr style={{ margin: 0 }} />
              <img
                className="my-2"
                style={{ alignSelf: "center" }}
                src={item.img}
                alt=""
                width="200"
                height="150"
              />
              <span>{item.desc}</span>
              <div
                className="position-absolute bottom-0 d-flex flex-row justify-content-between py-2"
                style={{ width: "100%" }}
              >
                <div className="github ms-5">
                  <a href={item.github} target="_blank">
                    <img src="/images/github.png" alt="" width="24" />
                  </a>
                </div>
                <div className="visit me-5">
                  <a href={item.visit} target="_blank">
                    <img src="/images/link.png" alt="" width="24" />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="icon my-3">
        <img src="/images/project.png" alt="" width="20" />
        <span> Others</span>
      </div>
      <div className="d-flex flex-wrap justify-content-center mx-4">
        {dataProjectOther.map((item) => {
          return (
            <Card className="text-center card position-relative my-2 mx-2" project>
              <span className="fw-bold">{item.title}</span>
              <hr style={{ margin: 0 }} />
              <img
                className="my-2"
                src={item.img}
                alt=""
                width="200"
                height="150"
                style={{ alignSelf: "center" }}
              />
              <span>{item.desc}</span>
              <div
                className="position-absolute bottom-0 d-flex flex-row justify-content-between py-2"
                style={{ width: "100%" }}
              >
                <div className="github ms-5">
                  <a href={item.github} target="_blank">
                    <img src="/images/github.png" alt="" width="24" />
                  </a>
                </div>
                <div className="visit me-5">
                  <a href={item.visit} target="_blank">
                    <img src="/images/link.png" alt="" width="24" />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
