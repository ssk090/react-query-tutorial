import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

export default function RQSuperhero() {
  const { heroId } = useParams();

  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Super Hero details page</h1>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
}
