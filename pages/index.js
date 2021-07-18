import { useState } from "react";
import Box from "../components/Base/Box/primary";
import Container from "../components/Base/Container/primary";
import Hr from "../components/Base/Hr";
import About from "../components/Module/About";
import Projects from "../components/Module/Projects";
import Side from "../components/Module/Side";
import Skills from "../components/Module/Skills";
import Contact from "../components/Module/Contacts";
import Head from "next/head";

export default function Home() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

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
              {active === "contact" && <Contact />}
            </div>
          </div>
        </Box>
      </div>
    </Container>
  );
}
