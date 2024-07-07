import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundCotainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;
export default function NotFound() {
  return (
    <NotFoundCotainer>
      <Link to="/">
        <span>←</span>
        Back to Home
      </Link>
      <h1>Not Found 404</h1>
    </NotFoundCotainer>
  );
}
