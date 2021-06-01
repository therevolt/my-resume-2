import Card from "../../Base/Card";

const skillLang = [
  {
    name: "HTML",
    icon: "/images/html.png",
  },
  {
    name: "CSS",
    icon: "/images/css.png",
  },
  {
    name: "JavaScript",
    icon: "/images/js.png",
  },
  {
    name: "SQL",
    icon: "https://www.svgrepo.com/show/255832/sql.svg",
  },
];

const skillLib = [
  {
    name: "NodeJS",
    icon: "/images/nodejs.png",
  },
  {
    name: "ReactJS",
    icon: "/images/react.png",
  },
  {
    name: "NextJS",
    icon: "/images/next.png",
  },
  {
    name: "ExpressJS",
    icon: "/images/express.png",
  },
  {
    name: "Bootstrap",
    icon: "/images/bootstrap.png",
  },
  {
    name: "MySQL",
    icon: "/images/mysql.png",
  },
  {
    name: "Sequelize",
    icon: "/images/sequelize.png",
  },
  {
    name: "Socket.io",
    icon: "/images/socket.png",
  },
  {
    name: "ReduxJS",
    icon: "/images/redux.png",
  },
  {
    name: "Redis",
    icon: "/images/redis.png",
  },
  {
    name: "Puppeteer",
    icon: "/images/puppeteer.png",
  },
  {
    name: "Axios",
    icon: "/images/axios.png",
  },
  {
    name: "JWT",
    icon: "https://jwt.io/img/pic_logo.svg",
  },
  {
    name: "Node Cron",
    icon: "/images/corn.png",
  },
  {
    name: "Ant Design",
    icon: "/images/ant.png",
  },
  {
    name: "Styled Component",
    icon: "/images/styled.png",
  },
];

const skillOther = [
  {
    name: "Git",
    icon: "/images/git.png",
  },
  {
    name: "GitHub",
    icon: "/images/github.png",
  },
  {
    name: "PhotoShop",
    icon: "/images/ps.png",
  },
  {
    name: "AWS",
    icon: "/images/aws.png",
  },
  {
    name: "GCP",
    icon: "/images/gcp.png",
  },
  {
    name: "PM2",
    icon: "/images/pm2.png",
  },
  {
    name: "VS Code",
    icon: "/images/vs.png",
  },
  {
    name: "Nginx",
    icon: "/images/nginx.png",
  },
  {
    name: "Netlify",
    icon: "/images/netlify.png",
  },
  {
    name: "NPM",
    icon: "/images/npm.png",
  },
  {
    name: "JSON",
    icon: "/images/json.png",
  },
  {
    name: "Hosting/VPS",
    icon: "/images/hosting.png",
  },
];

const Skills = () => {
  return (
    <>
      <div className="icon my-3">
        <img src="/images/programming.png" alt="" />
        <span> Programming/Markup Languages</span>
      </div>
      <div className="d-flex flex-wrap">
        {skillLang.map((item) => {
          return (
            <Card className="card d-flex flex-row mx-2 my-2">
              <div className="position-relative" style={{ width: "50px" }}>
                <div class="position-absolute top-50 translate-middle" style={{ left: "25px" }}>
                  <img className="mx-2" src={item.icon} alt="" height="40" />
                </div>
              </div>
              <p className="my-2 py-1 mx-2">{item.name}</p>
            </Card>
          );
        })}
      </div>
      <div className="icon my-3">
        <img src="/images/programming.png" alt="" />
        <span> Libraries/Frameworks</span>
      </div>
      <div className="d-flex flex-wrap">
        {skillLib.map((item) => {
          return (
            <Card className="card d-flex flex-row mx-2 my-2">
              <div className="position-relative" style={{ width: "50px" }}>
                <div class="position-absolute top-50 translate-middle" style={{ left: "25px" }}>
                  <img className="mx-2" src={item.icon} alt="" height="40" />
                </div>
              </div>
              <p className="my-2 py-1 mx-2">{item.name}</p>
            </Card>
          );
        })}
      </div>
      <div className="icon my-3">
        <img src="/images/programming.png" alt="" />
        <span> Others</span>
      </div>
      <div className="d-flex flex-wrap mb-3">
        {skillOther.map((item) => {
          return (
            <Card className="card d-flex flex-row mx-2 my-2">
              <div className="position-relative" style={{ width: "50px" }}>
                <div class="position-absolute top-50 translate-middle" style={{ left: "25px" }}>
                  <img className="mx-2" src={item.icon} alt="" height="40" />
                </div>
              </div>
              <p className="my-2 py-1 mx-2">{item.name}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
