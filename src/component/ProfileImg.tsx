import styled from "styled-components";
import defaultProfileImg from "../assets/default-profile.png";
import { useState } from "react";

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
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);

  const handleImageError = () => {
    setImageSrc(defaultProfileImg); // default when img load fails
  };

  return (
    <ProfileImgCotainer>
      <img
        src={imageSrc ? imageSrc : defaultProfileImg}
        onError={handleImageError}
        alt="profile image"
      />
    </ProfileImgCotainer>
  );
}
