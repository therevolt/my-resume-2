import { useState } from "react";
import Box from "../components/Base/Box/primary";
import Card from "../components/Base/Card";
import Container from "../components/Base/Container/primary";
import Hr from "../components/Base/Hr";
import About from "../components/Module/About";
import Projects from "../components/Module/Projects";
import Side from "../components/Module/Side";
import Skills from "../components/Module/Skills";
import Head from "next/head";

export default function Home() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  const dataContact = [
    {
      title: "WhatsApp",
      image: "https://image.flaticon.com/icons/svg/733/733585.svg",
      link: "https://wa.me/6289522407667",
    },
    {
      title: "Email",
      image: "/images/gmail.png",
      link: "mailto:ramaseftiansyah12@gmail.com",
    },
    {
      title: "Phone",
      image: "/images/contact.png",
      link: "+6289522407667",
    },
  ];

  const dataSite = [
    {
      title: "GitHub",
      image: "/images/github.png",
      link: "https://github.com/therevolt",
    },
    {
      title: "LinkedIn",
      image: "/images/linkedin.png",
      link: "https://linkedin.com/in/ramaseftiansyah",
    },
  ];

  return (
    <Container primary>
      <Head>
        <title>{active.toUpperCase()} - PORTOFOLIO RAMA SEFTIANSYAH</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container px-5">
        <Box className="d-flex">
          <Side
            fireEvent={[setActive, active, setShow]}
            className={show ? "block" : "none"}
          />
          <div className="main ms-4">
            <div className="d-flex flex-row">
              <div
                className="mt-3 me-3 d-sm-block d-md-none"
                onClick={handleClick}
              >
                <img src="/images/back.png" alt="" width="16" />
              </div>
              <div>
                <div className="title mt-3 fw-bold">{active.toUpperCase()}</div>
                <Hr main />
              </div>
            </div>
            <div className="content">
              {active === "about" && <About />}
              {active === "skills" && <Skills />}
              {active === "projects" && <Projects />}
              {active === "contact" && (
                <>
                  <div className="icon my-3">
                    <img src="/images/contact.png" alt="" width="20" />
                    <span> Contact me</span>
                  </div>
                  <div className="d-flex flex-lg-row flex-column">
                    {dataContact.map((item) => {
                      return (
                        <Card className="card d-flex flex-row mx-2 my-2">
                          <div
                            className="position-relative"
                            style={{ width: "50px" }}
                          >
                            <div
                              class="position-absolute top-50 translate-middle"
                              style={{ left: "25px" }}
                            >
                              <img
                                className="mx-2"
                                src={item.image}
                                alt=""
                                height="40"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="mx-2">{item.title}</span>
                            {item.title === "Phone" ? (
                              <span className="mx-2">{item.link}</span>
                            ) : (
                              <a className="mx-2" href={item.link}>
                                Click Here
                              </a>
                            )}
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                  <div className="icon my-3">
                    <img src="/images/contact.png" alt="" width="20" />
                    <span> Website Personal</span>
                  </div>
                  <div className="d-flex flex-lg-row flex-column">
                    {dataSite.map((item) => {
                      return (
                        <Card className="card d-flex flex-row mx-2 my-2">
                          <div
                            className="position-relative"
                            style={{ width: "50px" }}
                          >
                            <div
                              class="position-absolute top-50 translate-middle"
                              style={{ left: "25px" }}
                            >
                              <img
                                className="mx-2"
                                src={item.image}
                                alt=""
                                height="40"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="mx-2">{item.title}</span>
                            {item.title === "Phone" ? (
                              <span className="mx-2">{item.link}</span>
                            ) : (
                              <a className="mx-2" href={item.link}>
                                Click Here
                              </a>
                            )}
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </Box>
      </div>
    </Container>
  );
}
