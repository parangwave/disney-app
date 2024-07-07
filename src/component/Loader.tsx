import styled from "styled-components";
import Spinner from "../assets/spinner.gif";

export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <img src={Spinner} alt="spinner" />
    </LoaderContainer>
  );
}
