import styled from "styled-components";

const Card = styled.div`
  height: 50px;
  width: 200px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.31);
  ${(props) => props.project && `height:285px !important;`}
`;

export default Card;
