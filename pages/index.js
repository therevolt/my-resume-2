import { useState } from "react";
import Box from "../components/Base/Box/primary";
import Container from "../components/Base/Container/primary";
import Hr from "../components/Base/Hr";
import About from "../components/Module/About";
import Projects from "../components/Module/Projects";
import Side from "../components/Module/Side";
import Skills from "../components/Module/Skills";

export default function Home() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(true);

  const handleClick = () => setShow(!show);

  return (
    <Container primary>
      <div className="container px-5">
        <Box className="d-flex">
          <Side fireEvent={[setActive, active, setShow]} className={show ? "block" : "none"} />
          <div className="main ms-4">
            <div className="d-flex flex-row">
              <div className="mt-3 me-3 d-sm-block d-md-none" onClick={handleClick}>
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
                </>
              )}
            </div>
          </div>
        </Box>
      </div>
    </Container>
  );
}
