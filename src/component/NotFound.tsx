import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundCotainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  a {
    margin: 3rem 0;
    transition: all 0.3s ease-in-out;
    font-size: 3rem;

    span {
      display: inline-block;
    }

    &:hover {
      font-size: 3.5rem;
    }
  }
`;
export default function NotFound() {
  return (
    <NotFoundCotainer>
      <Link to="/">
        <span>←&nbsp;</span>
        <span>Back to Home</span>
      </Link>
      <h1>Not Found 404</h1>
    </NotFoundCotainer>
  );
}
