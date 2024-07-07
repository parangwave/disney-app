import styled from "styled-components";

export const ProfileImg = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
  }
`;
