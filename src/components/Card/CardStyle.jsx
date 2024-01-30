import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100%;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
`;

export const CardBody = styled.article`
  display: flex;
  height: 100%;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  img {
    width: 40%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 0.3rem 0.3rem 0;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;
  section {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${(props) => (props.top ? "1.5rem" : ".9rem")};
  h2 {
    margin-bottom: 0.8rem;
    font-size: ${(props) => (props.top ? "3rem" : "1.5rem")};
    width: 100%;
  }
`;
