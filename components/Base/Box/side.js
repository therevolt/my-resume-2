import styled from "styled-components";

const SideBox = styled.div`
  background-color: white;
  width: 400px;
  height: 80vh;
  border-radius: 3px;
  box-shadow: 3px 0px 12px 3px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 3px 0px 12px 3px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 3px 0px 12px 3px rgba(0, 0, 0, 0.31);

  @media screen and (max-width: 715px) {
    z-index: 3;
    position: absolute !important;
    width: 80vw;
  }
`;

export default SideBox;
