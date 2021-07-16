const About = () => {
  return (
    <>
      <div className="text-center my-4">
        <img
          src="/images/me.png"
          alt=""
          width="240"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="icon my-3">
        <img src="/images/info.png" alt="" width="25" />
        <span> About Me</span>
      </div>
      <div className="text mx-3 mb-3" style={{ textAlign: "justify" }}>
        Hello, I'm Rama Seftiansyah. I am a Full Stack Web Developer, very
        interested in programming, especially javascript. I started programming
        as a hobby since April, 2020. I am a graduate of SMK YP Karya 2
        Tangerang (Computer & Network Engineering) and{" "}
        <a href="https://arkademy.com">Arkademy Bootcamp</a>, I have experience
        in creating several websites, such as movie ticket booking, digital
        wallet, and online shopping. Worked with many libraries & frameworks
        like ReactJS, NodeJS, ExpressJS, etc. It does feel amazing to see myself
        improving, Hoping to continue to improve and be better than now.
      </div>
    </>
  );
};

export default About;
