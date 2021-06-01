import styled from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.primary &&
    `
      background-color: #546de5;
      margin: 0;
      padding: 0;
      height: 100vh;
    `}
`;

export default Container;
