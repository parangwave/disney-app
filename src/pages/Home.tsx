import { useQuery } from "@tanstack/react-query";
import { fetchCharacterList } from "../utils/api";
import { ICharacterList } from "../utils/chatacterList";
import { Link } from "react-router-dom";
// common components
import Loader from "../component/Loader";


export default function Home() {
  const { isLoading, data } = useQuery<ICharacterList>({
    queryKey: ["chracterList"],
    queryFn: () => fetchCharacterList(),
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {data?.map((charater) => (
            <li key={charater.id}>
              <img src={charater.imageUrl} alt="character profile img" />
              <Link to={`character/${charater.id}`}>{charater.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
