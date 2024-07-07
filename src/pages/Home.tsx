import { useQuery } from "@tanstack/react-query";
import { fetchCharacterList } from "../utils/api";
import { ICharacterList } from "../utils/chatacterList";
import { Link } from "react-router-dom";
import styled from "styled-components";

// common components
import Loader from "../component/Loader";
import { ProfileImg } from "../component/ProfileImg";

const CharacterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(55px, 500px));
  gap: 1.8rem 0;
`;

const CharacterItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-in-out;
  padding: 2rem 0;

  a {
    font-size: 1.8rem;
    margin: 1rem 0;
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    a {
      transform: scale(1.1);
      font-weight: 600;
    }
  }
`;

export default function Home() {
  const { isLoading, data } = useQuery<ICharacterList>({
    queryKey: ["chracterList"],
    queryFn: () => fetchCharacterList(),
  });

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <CharacterList>
          {data?.map((character) => (
            <CharacterItem key={character.id}>
              <ProfileImg>
                <img src={character.imageUrl} alt="character profile img" />
              </ProfileImg>
              <Link to={`character/${character.id}`}>{character.name}</Link>
            </CharacterItem>
          ))}
        </CharacterList>
      )}
    </main>
  );
}
