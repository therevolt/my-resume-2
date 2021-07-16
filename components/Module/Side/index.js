import SideBox from "../../Base/Box/side";
import Hr from "../../Base/Hr";
import SpanMenu from "../../Base/SpanMenu";

const Side = (props) => {
  const handleClick = (e) => {
    const { id } = e.target;
    props.fireEvent[0](id);
    props.fireEvent[2](false);
  };

  const handleDownload = () => {
    window.location.replace(
      "https://drive.google.com/file/d/1eZpFJI5921c6Ll4T28xQkb635dK66z-8/view?usp=sharing"
    );
  };

  return (
    <SideBox
      className={`text-center side py-5 d-flex flex-column position-relative ${props.className}`}
    >
      <div style={{ marginTop: "-35px" }}>
        <img src="/images/me2.png" alt="" width="140" />
        <h5 className="pt-3" style={{ margin: 0 }}>
          Rama Seftiansyah
        </h5>
        <span>Full Stack Web Developer</span>
      </div>
      <div className="position-absolute bottom-0" style={{ width: "100%" }}>
        <Hr side />
        <div className="menu d-flex flex-column my-3">
          <SpanMenu
            id="about"
            fireEvent={props.fireEvent[1]}
            handleClick={handleClick}
            text="ABOUT"
          />
          <SpanMenu
            id="skills"
            fireEvent={props.fireEvent[1]}
            handleClick={handleClick}
            text="SKILLS"
          />
          <SpanMenu
            id="projects"
            fireEvent={props.fireEvent[1]}
            handleClick={handleClick}
            text="PROJECTS"
          />
          <SpanMenu
            id="contact"
            fireEvent={props.fireEvent[1]}
            handleClick={handleClick}
            text="CONTACT"
          />
          <SpanMenu
            id="dwnld-cv"
            handleClick={handleDownload}
            text="DOWNLOAD CV"
          />
        </div>
        <Hr side />
        <div className="icon my-2">
          <a href="https://wa.me/6289522407667" target="_blank">
            <img
              className="mx-2"
              src="/images/whatsapp.png"
              alt=""
              width="16"
            />
          </a>
          <a href="https://linkedin.com/in/ramaseftiansyah" target="_blank">
            <img
              className="mx-2"
              src="/images/linkedin.png"
              alt=""
              width="16"
            />
          </a>
        </div>
      </div>
    </SideBox>
  );
};

export default Side;
