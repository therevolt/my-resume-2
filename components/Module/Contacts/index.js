import Card from "../../Base/Card";

export default function Contact() {
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
    <>
      <div className="icon my-3">
        <img src="/images/contact.png" alt="" width="20" />
        <span> Contact me</span>
      </div>
      <div className="d-flex flex-lg-row flex-column">
        {dataContact.map((item) => {
          return (
            <Card className="card d-flex flex-row mx-2 my-2">
              <div className="position-relative" style={{ width: "50px" }}>
                <div
                  class="position-absolute top-50 translate-middle"
                  style={{ left: "25px" }}
                >
                  <img className="mx-2" src={item.image} alt="" height="40" />
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
              <div className="position-relative" style={{ width: "50px" }}>
                <div
                  class="position-absolute top-50 translate-middle"
                  style={{ left: "25px" }}
                >
                  <img className="mx-2" src={item.image} alt="" height="40" />
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
  );
}
