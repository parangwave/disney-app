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

  h3 {
    padding: 1.5rem 0;
    font-size: 2.5rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="header" />
      <h3>Meet ALL Disney Characters</h3>
    </HeaderContainer>
  );
}
