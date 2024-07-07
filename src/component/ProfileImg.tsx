import styled from "styled-components";
import defaultProfileImg from "../assets/default-profile.png";

export const ProfileImgCotainer = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProfileImg({ src }: { src?: string }) {
  return (
    <ProfileImgCotainer>
      <img src={src ? src : defaultProfileImg} alt="profile image" />
    </ProfileImgCotainer>
  );
}
