import { useQuery } from "@tanstack/react-query";
import { fetchCharacterInfo } from "../utils/api";
import { useParams } from "react-router-dom";
import { ICharacterInfo } from "./../utils/characterInfo";
import { Link } from "react-router-dom";
import Loader from "../component/Loader";
import { ProfileImg } from "../component/ProfileImg";

export default function Character() {
  const { id = " " } = useParams<{ id: string }>();

  const { isLoading, data } = useQuery<ICharacterInfo>({
    queryKey: ["characterInfo", id],
    queryFn: () => fetchCharacterInfo(id),
    enabled: id !== "", // id가 빈 문자열이 아닐 때만 쿼리 실행
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img src={`${data?.imageUrl}`} alt="character profile img" />
          <ProfileImg>
            <img src={`${data?.imageUrl}`} alt="character profile img" />
          </ProfileImg>
          <h2>{data?.name}</h2>
          <ul>
            {data?.films.map((film, idx) => (
              <li key={idx}>{film}</li>
            ))}
          </ul>
          <Link to={data?.sourceUrl ?? ""}>More Info in Fandom Wiki</Link>
        </>
      )}
    </>
  );
}
