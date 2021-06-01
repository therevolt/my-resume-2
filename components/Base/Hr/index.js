import styled from "styled-components";

const Hr = (props) => {
  const HR = styled.hr`
    color: #778beb;
    border: 1px solid #778beb;
    ${(props) =>
      props.side &&
      `
  margin-left:5rem;
  margin-right:5rem
  `}
    ${(props) =>
      props.main &&
      `
  width:100px;
  margin:0;
  margin-top:5px;`}
  `;
  return <HR {...props} />;
};

export default Hr;
