import { useQuery } from "@tanstack/react-query";
import { fetchCharacterInfo } from "../utils/api";
import { useParams } from "react-router-dom";
import { ICharacterInfo } from "./../utils/characterInfo";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import Loader from "../component/Loader";
import ProfileImg from "../component/ProfileImg";

const CharacterProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    margin: 2rem;
  }

  a {
    margin-top: 2rem;
    font-size: 2rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Movies = styled.ul`
  width: 30vw;

  li {
    display: inline-block;
    background-color: #1e272e;
    padding: 1rem;
    font-size: 1.2rem;
    align-text: center;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;

    &:not(last-child) {
      margin: 0.7rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function Character() {
  const { id = " " } = useParams<{ id: string }>();

  const { isLoading, data } = useQuery<ICharacterInfo>({
    queryKey: ["characterInfo", id],
    queryFn: () => fetchCharacterInfo(id),
    enabled: id !== "", // id가 빈 문자열이 아닐 때만 쿼리 실행
  });

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <CharacterProfile>
          <ProfileImg src={data?.imageUrl} />
          <h2>{data?.name}</h2>
          <Movies>
            {data?.films.map((film, idx) => (
              <li key={idx}>{film}</li>
            ))}
          </Movies>
          <Link to={data?.sourceUrl ?? ""}>More Info in Fandom Wiki</Link>
        </CharacterProfile>
      )}
    </main>
  );
}
