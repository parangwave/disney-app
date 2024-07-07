import styled from "styled-components";
import logoImg from "../assets/disney-logo.svg";

const HeaderContainer = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  img {
    width: 15rem;
    filter: invert(100%);
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
      <img src={logoImg} alt="header" />
      <span>Meet ALL Disney Characters</span>
    </HeaderContainer>
  );
}
