import styled from "styled-components";
import logoImg from "../assets/disney-logo.svg";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  a {
    transition: all 0.25s ease-in-out;

    img {
      width: 15rem;
      filter: invert(100%);
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  // validateDOMNesting(...): <h3> cannot appear as a child of <h1>.
  span {
    padding: 1.5rem 0;
    font-size: 2.5rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="header" />
      </Link>
      <span>Meet ALL Disney Characters</span>
    </HeaderContainer>
  );
}
